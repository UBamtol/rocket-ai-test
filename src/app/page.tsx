import Image from 'next/image';
import BackgroundImage from '/public/backgroundImg.png';
import SajuTable from '../../components/SajuTable';
import { tableTitle } from '../../data/sajuData';

export default function Home() {
  return (
    <div className='relative'>
      <Image src={BackgroundImage} alt='backgroundImg' />
      <div className='absolute top-4/13 left-1/7 w-3/7 h-1/20 flex justify-center items-center text-center whitespace-pre-wrap responsive-text-lg'>
        {`이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요`}
      </div>
      <div className='absolute top-12/25 left-1/10 w-4/7 h-1/20 flex justify-center items-center text-center whitespace-pre-wrap responsive-text-lg'>
        {`제가 OO님의 사주를\n보기 쉽게 표로 정리했어요`}
      </div>
      <div
        className='absolute w-full top-5/7'
        style={{ paddingLeft: '7%', paddingRight: '7%' }}
      >
        <div className='w-full bg-[#f5f3ec]'>
          <div className='w-full border-r-1'>
            <div className='border-b-1 flex justify-around divide-x-1 responsive-title'>
              {tableTitle.map((title, i) => (
                <div key={i} className='w-2/5 flex justify-center itmes-center'>
                  {title}
                </div>
              ))}
            </div>
            <SajuTable />
          </div>
        </div>
      </div>
    </div>
  );
}
