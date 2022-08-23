import Head from 'next/head';
const OpenGraphHead = () => (
	<Head>
		<title>John Jerome Perez | Front-End Developer</title>
		<link rel='icon' href='/favicon.ico' />
		<meta name='description' content='My personal portfolio website.' />
		<meta
			property='og:title'
			content='John Jerome Perez | Front-End Developer'
		/>
		<meta property='og:site_name' content='John Jerome Perez' />
		<meta property='og:url' content='https://jjperez.vercel.app/' />
		<meta
			property='og:description'
			content='Hey there, my name is John Jerome Perez . . . I am a Front-End Developer'
		/>
		<meta property='og:type' content='profile' />
		<meta property='og:image' content='/logo/jjp-logo-light.png'></meta>
	</Head>
);
export default OpenGraphHead;
