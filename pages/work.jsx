import { Layout, ArticleWrapper, ArticleItem, Container } from '@/layouts'
import { IoEyeOutline, IoLogoGithub } from 'react-icons/io5'
import Typo from '@/components/Typography'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Head from 'next/head'

// of course you can use the gray matter to do the same thing as the `article` do, but i will be put the data here instead
const staticData = [
  {
    title: 'Pembuatan Aplikasi Stok Barang CV. Mulia Jaya Agung Menggunakan PHP dan MySQL Berbasis Web',
    desc: 'Ditujukan untuk memenuhi Penulisan Ilmiah Universitas Gunadarma.',
    techs: ['Codeigniter 4', 'Phpmyadmin','AJAX','SBAdmin2'],
    ghLink: 'https://github.com/haafidz-jp/after-sidang',
    // change the demolink if you have one
    demoLink: 'https://pi.haafidz.xyz',
  },
]

export default function Work() {
  return (
    <>
      <Head>
      <meta
          name='description'
          content="While I'm leveling up myself as a Developer, I want to share my knowledge, I will sometimes write about Web Development here."
        />
        <meta name='keywords' content='haafidz-jp, Haafidz123, Haafidz Nurul Salim,  portfolio, blogs, blog, portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Haafidz Nurul Salim' />
        <meta
          name='description'
          content="Hi, my Name is Haafidz Nurul Salim, I'm a Junior Front-end Developer based in Bekasi, Indonesia. nice to meet you!"
        />

        <title>Haafidz Nurul Salim | Haafidz&apos; works</title>
      </Head>
      <Layout>
        <Header />
        <Container main>
          <section className='w-full'>
            <Typo Title>My works</Typo>

            <Typo SubTitle hasWidth widthProse>
              Berikut perjalanan proyek saya.
            </Typo>
          </section>

          <section className='w-full sm:px-2 lg:px-4'>
            <Typo Heading marginBot>
              Latest works!
            </Typo>

            <ArticleWrapper grid>
              {staticData.map(({ demoLink, desc, ghLink, techs, title }, i) => (
                <ArticleItem key={i}>
                  <Typo SubHeading marginBot>
                    {title}
                  </Typo>
                  <Typo Paragraph leading>
                    {desc}
                  </Typo>
                  {/* if you want to feature the tech or something else that in the list, this will be displayed other than that, would be null */}
                  {techs.length ? (
                    <ul className='list-inside list-disc mb-1 sm:mb-2 lg:mb-4'>
                      {techs.map((item, i) => (
                        <li
                          key={i}
                          className='text-xs sm:text-sm lg:text-base marker:text-blue-500 dark:marker:text-pink-500 text-gray-700 dark:text-gray-400'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className='flex items-center space-x-1 sm:space-x-1.5'>
                    <Button iconOnly href={ghLink}>
                      <IoLogoGithub />
                    </Button>
                    {/* if you have demo link then this will be displayed */}
                    {demoLink ? (
                      <Button iconOnly href={demoLink}>
                        <IoEyeOutline />
                      </Button>
                    ) : null}
                  </div>
                </ArticleItem>
              ))}
            </ArticleWrapper>
          </section>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
