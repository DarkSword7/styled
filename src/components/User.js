/* eslint-disable @next/next/no-img-element */
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function User() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (!user)
    return (
      <div onClick={() => router.push("/api/auth/login")}>
        <CircleUserRound />
        <h3>Profile</h3>
      </div>
    );

  return (
    <Profile onClick={() => router.push("/profile")}>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
    </Profile>
  );
}

const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
