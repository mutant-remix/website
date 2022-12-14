import Head from 'next/head'
import { Page } from '../components/Page'
import { MainHero } from '../components/hero/MainHero'
import { PlainAndSimple } from '../components/hero/PlainAndSimple'
import { ExpressYourself } from '../components/hero/ExpressYourself'
import { LicensingInformation } from '../components/hero/LicensingInformation'

export default function Home() {
	return (
		<Page dark>
			<Head>
				<title>Mutant Remix</title>
				
				<meta property="og:title" content="Mutant Remix" />
				<meta property="og:url" content="https://mutant.revolt.chat" />
				<meta property="og:image" content="https://mutant.revolt.chat/assets/embed.png" />
				<meta property="og:description" content="Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations." />
				
				<meta property="twitter:title" content="Mutant Remix" />
				<meta property="twitter:site" content="@revoltchat" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:image" content="https://mutant.revolt.chat/assets/embed.png" />
				<meta property="twitter:image:alt" content='Image consisting of some emojis and the titles "Be diverse." and "Stand out."' />
				<meta property="twitter:description" content="Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations." />
				
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
			</Head>
			
			<MainHero />
			<ExpressYourself />
			<PlainAndSimple />
			<LicensingInformation />
		</Page>
		)
	}
	