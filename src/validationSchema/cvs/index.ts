import * as yup from 'yup';

export const cvValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  template_id: yup.string().nullable(),
});
