import Image from 'next/image'
import Link from 'next/link'

async function getNovel (novelid) {
    const res = await fetch(`http://novel-backend.test/api/novels/${novelid}`)
    const data = await res.json()
    console.log(data)

    return data
}

async function getChapter (novelid) {
    const res1 = await fetch(
        `http://novel-backend.test/api/chapters/novel/${novelid}`
    )
    const data2 = await res1.json()
    console.log(data2)

    return data2
}

export async function generateStaticParams () {
    const novels = await fetch('http://novel-backend.test/api/novels')
    const novelsData = await novels.json()
    console.log(novelsData)

    return novelsData.data.map(novel => ({
        id: novel.id
    }))
}

const Novel = async ({ params }) => {
    const novelData = await getNovel(params.novelid)
    const chapterData = await getChapter(params.novelid)
    console.log(novelData)
    console.log(chapterData)

    return (
        <div className='bg-white'>
            <div className='flex flex-row'>
                <div className='p-2 py-2'>
                    <div className='hidden float-left pr-2 md:block'>
                        <Image
                            src={novelData.data.cover}
                            alt='cover'
                            objectFit='cover'
                            // fill={true}
                            width={250}
                            height={500}
                        />
                    </div>
                    <div className='block float-left pr-2 md:hidden'>
                        <Image
                            src={novelData.data.cover}
                            alt='cover'
                            objectFit='cover'
                            // fill={true}
                            width={120}
                            height={400}
                        />
                    </div>
                    <h1 className='text-lg font-bold capitalize break-all'>
                        {novelData.data.title}
                    </h1>
                    <p className='text-justify break-words whitespace-pre-line'>
                        {novelData.data.description}
                    </p>
                </div>
            </div>

            <div className='m-2'>
                <div className='grid grid-cols-2 px-4 pb-4 mb-4 border-t-2 border-black sm:grid-cols-3 md:grid-cols-4'>
                    {chapterData.data.map((chapter, index) => (
                        <div
                            key={chapter.id}
                            className='pt-2 hover:text-green-400'
                        >
                            <Link
                                href={`/novel/${params.novelid}/${chapter.id}`}
                                className=''
                            >
                                <p className='flex justify-center border-b-2 border-slate-100 '>
                                    Section {index + 1}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Novel
