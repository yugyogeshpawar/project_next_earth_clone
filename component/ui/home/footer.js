import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className="w-full flex justify-center flex-col mt-10 px-20">

            <div className="w-full border-gray-400 border max-w-6xl">
            </div>

            <div>
                <div>
                    <div className='flex m-3 flex-none items-center '>
                        <img src="/next_earth.svg" alt="" className='w-8 h-8 mt-1 mr-1 ' />
                        <div className='flex-col flex w-28 text-xs font-bold mt-1 '>
                            META X LAND
                        </div>
                    </div>
                </div>
                <div>
                <TwitterIcon className=''/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer