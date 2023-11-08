import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div class="nav">
        <ul>
          <li class="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link href="about">About</Link>
          </li>
          <li class="nav-item">
            <Link href="profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
