import Link from 'next/link';

interface BounceButtonProps {
  href: string;
  text?: string;
  width?: string;
  height?: string;
}

const BounceButton: React.FC<BounceButtonProps> = ({
  href,
  text = 'Schedule Call',
  width = '180px',
  height = '50px',
}) => {
  return (
    <Link
      className="group cursor-pointer slide-anime rounded-full border-2 border-[#006bff] text-[#006BFF] flex justify-center items-center font-semibold"
      href={href}
      style={{ width, height }}
    >
      {text}
    </Link>
  );
};

export default BounceButton;
