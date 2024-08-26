import { ReceiveCode, VerificationCode } from '@/components/auth/login';

const LoginPage = ({ params }: { params: { slug: 'receiveCode' | 'verificationCode' } }) => {
  const renderElement = (key: 'receiveCode' | 'verificationCode') => {
    switch (key) {
      case 'receiveCode':
        return <ReceiveCode />;

      case 'verificationCode':
        return <VerificationCode />;

      default:
        return <ReceiveCode />;
    }
  };
  return renderElement(params.slug);
};

export default LoginPage;
