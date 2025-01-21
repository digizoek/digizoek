import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ArrowHoverBtnProps {
  href: string;
  text?: string;
  arrowPosition?: 'left' | 'right';
  width?: string;
}

const ArrowHoverBtn: React.FC<ArrowHoverBtnProps> = ({
  href,
  text = 'Schedule Call',
  arrowPosition = 'right',
  width = '180px',
}) => {
  return (
    <Link
      className="group cursor-pointer slide-anime px-5 py-3 rounded-full bg-[#006bff] text-white flex justify-between items-center font-semibold"
      href={href}
      style={{ width }}
    >
      {text}
      <div
        className={`group-hover:translate-x-2 bg-[#006bff] transition-all ${
          arrowPosition === 'left' ? 'rotate-180' : ''
        }`}
      >
        <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
          <ArrowRight color="#006bff" />
        </div>
      </div>
    </Link>
  );
};

export default ArrowHoverBtn;
