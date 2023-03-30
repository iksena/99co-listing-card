import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>99.co Frontend Test</title>
        <meta name="description" content="Generated by create next app for 99.co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Card Title</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis vel velit sagittis hendrerit vel a nisi. Donec efficitur urna ut mi bibendum, ut ultrices justo lacinia. </p>
          </div>
        </div>
      </main>
    </>
  );
}
