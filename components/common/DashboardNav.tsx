import AvatarDropdown from './AvatarDropdown';
import Logo from './Logo';

const DashboardNav = () => {
  return (
    <nav className="flex sm:justify-end fixedNav justify-between items-center p-4 bg-blue">
      <div className="md:hidden">
        <Logo isBage />
      </div>
      <div className="">
        <AvatarDropdown />
      </div>
    </nav>
  )
}

export default DashboardNav
