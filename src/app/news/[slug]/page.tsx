'use client';
import Comments from '@/components/Comments'
import { FeatureNews } from '@/components/FeatureNews'
import { NewsSidebar } from '@/components/NewSidebar'
import { blogItems } from '@/constant'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {


    const [id, setId] = React.useState(1)
    const { slug } = useParams();

    useEffect(() => {
        setId(Number(slug))
    }, [slug])

    return (
        <div className='my-5 p-4'>

            <div className='flex gap-4'>
                <div className='w-4/5 flex flex-col gap-4'>

                    {/* categories */}
                    <div>
                        <button className='btn bg-purple-300 text-purple-600 mr-4'>categories</button>
                        <button className='btn bg-orange-200 text-orange-400'>categories</button>
                    </div>
                    <h1 className='text-title'>News title</h1>

                    <div className=' h-[300px] w-[100%] relative rounded-md overflow-hidden'>
                        <Image fill className='object-cover' alt='Image' src={blogItems[id-1].img[0]} />
                    </div>

                    {/* author desc */}
                    <div className='flex gap-2 my-2  py-3 border-b-2'>
                        <div className='w-[50px] h-[50px] relative rounded-full overflow-hidden'>
                            <Image className='object-cover' fill src={blogItems[id-1].authorImg} alt='auhtor' />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold'>Hannah Wilson</h2>
                            <span>Publish at 15th ,aug , 10:34 Am</span>
                        </div>
                    </div>

                    {/* descrption */}

                    <p className='text-para text-lg font-normal text-slate-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum molestias quibusdam reiciendis ullam. Voluptate, architecto sed sapiente soluta dolore deleniti modi praesentium neque vitae ducimus error alias, qui ut?
                        Perspiciatis quisquam accusamus atque aliquam numquam est, ipsum nihil? Facere recusandae nulla, possimus voluptatum alias architecto? Ducimus nam quidem aperiam maxime quasi velit ipsa eum voluptatum, dolorem, adipisci odit labore!
                        Fugiat at ipsam doloribus temporibus deleniti quam porro, sit rem animi vel eius consequuntur voluptatum suscipit tempore id atque vitae excepturi, praesentium blanditiis expedita libero maxime recusandae quas. Tenetur, fuga?
                        Vero beatae libero ipsa doloremque sunt eos dolorum illo expedita reiciendis distinctio accusamus vel soluta officiis quas veritatis nesciunt harum voluptatem mollitia, explicabo exercitationem ullam cum perferendis! Temporibus, dolorem officia.
                        Nemo inventore pariatur perspiciatis esse quaerat quia consequuntur, error, ipsum eaque maiores debitis adipisci consequatur laborum aperiam voluptatem dignissimos maxime tempora repellat. Ipsa fugiat dolorum eveniet, voluptatem eaque quaerat quae.
                        Repellendus, qui numquam! Sapiente, hic animi modi autem soluta dolorum odit qui veniam repudiandae rem sunt, voluptates provident, consectetur eum consequuntur totam facere officiis ea ullam corrupti odio atque ex.
                        Explicabo labore dolor deserunt expedita possimus asperiores! Eaque incidunt voluptas impedit ullam molestiae quaerat fugit vel aliquid. Ab facere optio, voluptatem illo non exercitationem ea aspernatur odit, minima neque obcaecati!
                        Mollitia nemo soluta, illo inventore delectus eius? Tenetur, nobis eaque voluptas a est enim exercitationem dolorem iusto odio quod corporis ab vitae molestiae at optio, cum eum officia id harum.
                        Molestiae iste libero sit architecto eaque tenetur quam nihil, distinctio atque quas in officia harum? Temporibus minima impedit nihil vero sed delectus quaerat recusandae quia. Libero dicta non accusamus dignissimos.
                        Asperiores ratione dignissimos nobis eum quod tempore, quidem dolor consectetur illo aut delectus, maiores corrupti itaque esse saepe, inventore repellendus. Nesciunt impedit architecto magnam quidem quia placeat, magni maiores aliquid.</p>

                    {/* img */}
                    <div className='h-[300px] w-[80%] relative rounded-sm overflow-hidden'>
                        <Image fill className='object-cover' alt='Image' src={"https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg"} />
                    </div>


                    <p className='text-para text-lg font-normal text-slate-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum molestias quibusdam reiciendis ullam. Voluptate, architecto sed sapiente soluta dolore deleniti modi praesentium neque vitae ducimus error alias, qui ut?
                        Perspiciatis quisquam accusamus atque aliquam numquam est, ipsum nihil? Facere recusandae nulla, possimus voluptatum alias architecto? Ducimus nam quidem aperiam maxime quasi velit ipsa eum voluptatum, dolorem, adipisci odit labore!
                        Fugiat at ipsam doloribus temporibus deleniti quam porro, sit rem animi vel eius consequuntur voluptatum suscipit tempore id atque vitae excepturi, praesentium blanditiis expedita libero maxime recusandae quas. Tenetur, fuga?
                    </p>

                </div>
                <div>
                    <FeatureNews FeaturNewsTitle='Related News' items={blogItems} />
                </div>
            </div>

            <Comments />
        </div>
    )
}

export default page
