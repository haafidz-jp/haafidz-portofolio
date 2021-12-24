/* eslint-disable @next/next/no-img-element */
import { Container, Layout } from '@/layouts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Typo from '@/components/Typography'
import Button from '@/components/Button'
import Head from 'next/head'

// put your link here, it's free on you if you want to share your resume or change to other purpose such as github link, etc
let myButtons = [
  {
    text: 'Resume',
    href: '/Resume_HaafidzNurulSalim.pdf',
    color: 'text-white bg-blue-500 hover:bg-blue-400 dark:bg-pink-500 dark:hover:bg-pink-400',
    isBlank: true,
  },
  {
    text: 'Works',
    href: '/work',
    color: 'text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600',
    isBlank: false,
  },
]

export default function Home() {
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
        <title>Haafidz Nurul Salim | Homepage</title>
      </Head>

      <Layout>
        <Header />
        <Container hasGrid main>
          <Container grid>
            <Container gridItem>
              <img
                title='Haafidz Nurul Salim'
                className='w-3/5 sm:w-3/5 lg:w-1/2 rounded-full opacity-90 dark:opacity-80 hover:opacity-100 transition'
                src='/profile.png'
                alt='Haafidz Nurul Salim'
              />
            </Container>

            <Container gridItem>
              <div className='w-full'>
                <Typo Title>Hi, My name is</Typo>
                <Typo Title2>Haafidz Nurul Salim</Typo>
                <Typo SubTitle hasWidth marginBot>
                  Known as Junior Web Developer and also Script Kiddie&apos;s.
                </Typo>

                <div className='w-full lg:w-1/2 flex items-stretch space-x-1 sm:space-x-2'>
                  {myButtons.map(({ href, color, text, isBlank }, i) => (
                    <Button href={href} color={color} key={i} isBlank={isBlank} homeBtn>
                      {text}
                    </Button>
                  ))}
                </div>
              </div>
            </Container>
          </Container>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
