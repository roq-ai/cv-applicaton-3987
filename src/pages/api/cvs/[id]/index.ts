import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { cvValidationSchema } from 'validationSchema/cvs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.cv
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCvById();
    case 'PUT':
      return updateCvById();
    case 'DELETE':
      return deleteCvById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCvById() {
    const data = await prisma.cv.findFirst(convertQueryToPrismaUtil(req.query, 'cv'));
    return res.status(200).json(data);
  }

  async function updateCvById() {
    await cvValidationSchema.validate(req.body);
    const data = await prisma.cv.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCvById() {
    const data = await prisma.cv.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
