import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/app';

export default function HomePage(): never {
  redirect(ROUTES.LOGIN);
}
