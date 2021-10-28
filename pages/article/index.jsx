import { Container, Layout, ArticleItem, ArticleWrapper } from '@/layouts'
import { getSortedArticles } from '@/libs/posts'
import { BiRightArrowAlt } from 'react-icons/bi'
import Date from '@/components/Date'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Typo from '@/components/Typography'
import Button from '@/components/Button'
import Head from 'next/head'
import Image from 'next/image'

export default function Articles({ articlesData }) {
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
        <meta name='title' content="Haafidz Nurul Salim | Haafidz' article" />

        <title>Haafidz Nurul Salim | Haafidz&apos; article</title>
      </Head>
      <Layout>
        <Header />
        <Container main>
          <section className='w-full'>
            <Typo Title>My articles</Typo>
            <Typo SubTitle widthProse>
              Artikel ini dibuat untuk sharing kepada semua!
            </Typo>
          </section>
          <section className='w-full'>
            <div className='w-full flex items-center justify-between px-2 sm:px-4 lg:px-8'>
              <Typo Heading>Latest article</Typo>
            </div>
            <ArticleWrapper grid>
              {articlesData.length ? (
                articlesData.map(({ id, date, title, shortDesc, imageSrc }) => {
                  return (
                    <ArticleItem isArticle key={id}>
                      <Image
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL={imageSrc}
                        className='rounded-lg opacity-90 dark:opacity-75 hover:opacity-100 transition'
                        src={imageSrc}
                        alt='Article thumbnail'
                        objectFit='cover'
                        width={750}
                        height={425}
                      />
                      <Typo SubHeading>{title}</Typo>
                      <Date dateString={date} />
                      <Typo Paragraph relaxed>
                        {shortDesc}
                      </Typo>
                      <div>
                        <Button href={`/article/${id}`}>Read</Button>
                      </div>
                    </ArticleItem>
                  )
                })
              ) : (
                <div className='col-span-full grid place-items-center py-2 sm:py-4 lg:py-10'>
                  <p className='text-sm sm:text-base text-center text-gray-800 dark:text-gray-300'>
                    There are no article available right know, please comeback later!
                  </p>
                </div>
              )}
            </ArticleWrapper>
          </section>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const articlesData = getSortedArticles()

  return {
    props: {
      articlesData,
    },
  }
}
