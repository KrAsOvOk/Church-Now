"use client";

import { useEffect, useState } from "react";

type Member = {
  _id: string;
  name: string;
  role: string;
  email: string;
};

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div>
      <h1>Church Members</h1>
      <ul>
        {members.map((member) => (
          <li key={member._id}>
            <strong>{member.name}</strong> - {member.role} ({member.email})
          </li>
        ))}
      </ul>
    </div>
  );
}