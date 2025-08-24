import React from 'react';
import { sajuData } from '../data/sajuData';

const SajuTable = () => {
  return (
    <div className='w-full h-fit'>
      {sajuData.map((e, i) => {
        return (
          <div
            className='border-b flex justify-around divide-x-1 whitespace-nowrap bg-white overflow-auto'
            key={i}
          >
            <div
              className='w-2/5 flex flex-col justify-center items-center responsive-text bg-[#f5f3ec]'
              style={{ paddingTop: '2%', paddingBottom: '2%' }}
            >
              <div className='font-bold'>{e.title.hanja}</div>
              <div className='flex flex-col justify-center items-center responsive-text'>
                ({e.title.korean})
              </div>
            </div>
            {e.title.korean === '천간' || e.title.korean === '지지' ? (
              <>
                <div className='w-2/5 flex flex-col justify-center items-center responsive-text'>
                  <div
                    className='border rounded-2xl w-6/8 h-8/9 flex flex-col justify-center items-center'
                    style={{
                      backgroundColor: e.time.color.bgColor,
                      borderColor: e.time.color.borderColor,
                      color: e.time.color.textColor,
                    }}
                  >
                    <div className='responsive-subText'>{e.time.korean}</div>
                    <div className='responsive-title responsive-leading'>
                      {e.time.hanja[0]}
                    </div>
                    <div className='responsive-subText'>{e.time.hanja[1]}</div>
                  </div>
                </div>
                <div className='w-2/5 flex flex-col justify-center items-center responsive-text'>
                  <div
                    className='border rounded-2xl w-6/8 h-8/9 flex flex-col justify-center items-center'
                    style={{
                      backgroundColor: e.day.color.bgColor,
                      borderColor: e.day.color.borderColor,
                      color: e.day.color.textColor,
                    }}
                  >
                    <div className='responsive-subText'>{e.day.korean}</div>
                    <div className='responsive-title responsive-leading'>
                      {e.day.hanja[0]}
                    </div>
                    <div className='responsive-subText'>{e.day.hanja[1]}</div>
                  </div>
                </div>{' '}
                <div className='w-2/5 flex flex-col justify-center items-center responsive-text '>
                  <div
                    className='border rounded-2xl w-6/8 h-8/9 flex flex-col justify-center items-center'
                    style={{
                      backgroundColor: e.month.color.bgColor,
                      borderColor: e.month.color.borderColor,
                      color: e.month.color.textColor,
                    }}
                  >
                    <div className='responsive-subText'>{e.month.korean}</div>
                    <div className='responsive-title responsive-leading'>
                      {e.month.hanja[0]}
                    </div>
                    <div className='responsive-subText'>{e.month.hanja[1]}</div>
                  </div>
                </div>
                <div className='w-2/5 flex flex-col justify-center items-center responsive-text'>
                  {Array.isArray(e.year.korean) ? (
                    <div>
                      {e.year.korean.map((index, i) => {
                        return (
                          <div
                            className='flex flex-col  justify-center items-center'
                            key={i}
                          >
                            <div>{e.year.hanja[i]}</div>
                            <div>({index})</div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                      <div
                        className='border rounded-2xl w-6/8 h-8/9 flex flex-col justify-center items-center'
                        style={{
                          backgroundColor: e.year.color.bgColor,
                          borderColor: e.year.color.borderColor,
                          color: e.year.color.textColor,
                        }}
                      >
                        <div className='responsive-subText'>
                          {e.year.korean}
                        </div>
                        <div className='responsive-title responsive-leading'>
                          {e.year.hanja[0]}
                        </div>
                        <div className='responsive-subText'>
                          {e.year.hanja[1]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className='w-2/5 flex flex-col justify-center items-center responsive-text'>
                  <div className=' font-bold'>{e.time.hanja}</div>
                  <div>({e.time.korean})</div>
                </div>
                <div className='w-2/5 flex flex-col justify-center items-center  responsive-text'>
                  <div className=' font-bold'>{e.day.hanja}</div>
                  <div>({e.day.korean})</div>
                </div>{' '}
                <div className='w-2/5 flex flex-col justify-center items-center  responsive-text'>
                  <div className=' font-bold'>{e.month.hanja}</div>
                  <div>({e.month.korean})</div>
                </div>
                <div className='w-2/5 flex flex-col justify-center items-center  responsive-text'>
                  {Array.isArray(e.year.korean) ? (
                    <div>
                      {e.year.korean.map((index, i) => {
                        return (
                          <div
                            className='flex flex-col justify-center items-center'
                            key={i}
                          >
                            <div className='font-bold'>{e.year.hanja[i]}</div>
                            <div>({index})</div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className='flex flex-col  justify-center items-center'>
                      <div className=' font-bold'>{e.year.hanja}</div>
                      <div>({e.year.korean})</div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SajuTable;
