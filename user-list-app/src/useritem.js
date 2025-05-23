function UserItem({ user }) {
  return (
    <li>
      <strong>{user.name}</strong> — {user.email} — {user.phone} — {user.company.name}
    </li>
  );
}

export default UserItem;
