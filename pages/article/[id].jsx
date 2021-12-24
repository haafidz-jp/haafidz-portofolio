import { Container, Layout } from '@/layouts'
import { getArticleId, getArticles } from '@/libs/posts'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Typo from '@/components/Typography'
import Date from '@/components/Date'
import readingTime from 'reading-time'
import Head from 'next/head'
import Image from 'next/image'

export default function Article({ articleData: { title, imageSrc, imageAuthor, imageLink, date, contentHtml } }) {
  const { text } = readingTime(contentHtml)
  // const { asPath } = useRouter()

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
        <meta name='title' content={`Haafidz's article | ${title}`} />

        <base target='_blank' rel='noopener noreferrer' />

        <title>{`${title}`}</title>
      </Head>
      <Layout>
        <Header />
        <Container main article>
          <Button backBtn />
          <section className='py-2 sm:py-4 lg:py-12'>
            <figure className='select-none'>
              <Image
                loading='lazy'
                placeholder='blur'
                blurDataURL={imageSrc}
                className='rounded-lg object-cover'
                src={imageSrc}
                alt='Article Image'
                width={1200}
                height={720}
              />
              {/* Remove this if you have your own Image or Thumbnail */}
              <figcaption className='text-xs sm:text-sm text-gray-700 dark:text-gray-400'>
                Photo by{' '}
                <a href={imageLink} target='_blank' rel='noopener noreferrer'>
                  {imageAuthor}
                </a>{' '}
                on Unsplash
              </figcaption>
            </figure>

            <Typo Heading forArticle>
              {title}
            </Typo>

            <div className='flex items-center justify-between my-2 sm:my-4'>
              <Date dateString={date} />
              <span className='text-xs sm:text-sm text-gray-700 dark:text-gray-400'>{text}</span>
            </div>

            <article
              className='prose prose-sm dark:prose-dark sm:prose md:prose-lg lg:prose-xl lg:max-w-screen-2xl font-roboto'
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </section>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = getArticleId()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articleData = await getArticles(params.id)

  return {
    props: {
      articleData,
    },
  }
}
