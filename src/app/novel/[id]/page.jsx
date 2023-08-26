async function getNovel (id) {
    const res = await fetch(`http://novel-backend.test/api/novels/${id}`)
    const data = await res.json()
    console.log(data)

    return data
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
    console.log(novelData)

    return (
        <div>
            {params.id}, {novelData.data.title}, {novelData.data.description}
        </div>
    )
}

export default Novel
