import Image from 'next/image'

async function getNovel (id) {
    const res = await fetch(`http://novel-backend.test/api/novels/${id}`)
    const data = await res.json()
    console.log(data)

    return data
}

async function getChapter (id) {
    const res1 = await fetch(
        `http://novel-backend.test/api/chapters/novel/${id}`
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
    const novelData = await getNovel(params.id)
    const chapterData = await getChapter(params.id)
    console.log(novelData)
    console.log(chapterData)

    return (
        <div className='bg-white'>
            <div className='flex flex-row'>
                <div className='hidden p-6 md:block md:4/12'>
                    <Image
                        src={novelData.data.cover}
                        alt='cover'
                        objectFit='cover'
                        // fill={true}
                        width={250}
                        height={330}
                    />
                </div>
                <div className='pl-2 md:py-6 md:basis-8/12'>
                    <h1 className='text-lg font-bold capitalize break-all'>
                        {novelData.data.title}
                    </h1>
                    <div className='float-left pr-2 md:hidden'>
                        <Image
                            src={novelData.data.cover}
                            alt='cover'
                            objectFit='cover'
                            // fill={true}
                            width={250}
                            height={330}
                        />
                    </div>
                    <p className='break-words whitespace-pre-line'>
                        {novelData.data.description}
                    </p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-lg font-bold capitalize break-all'>
                    Chapter
                </h1>
                <div className='flex flex-col'>
                    {chapterData.data.map((chapter, index) => (
                        <div
                            key={chapter.id}
                            className='flex flex-row justify-between'
                        >
                            {/* <p>{chapter.attributes.title}</p> */}
                            <p>{index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Novel
