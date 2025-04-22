import { getServerSession } from '../../../auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div style={{ padding: 20 }}><h2>Access Denied</h2></div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, Admin</h1>
      <p>You're logged in as: {session.user.email}</p>
    </div>
  );
}
