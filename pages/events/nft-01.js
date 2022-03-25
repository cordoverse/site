import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import HeroEvent from '../../components/heroEvent'
import EventBanner from '../../components/eventBanner'
import EventContent from '../../components/eventContent'
// import EventSpeaker from '../../components/eventSpeaker'

export default function Page() {

    return (
        <Layout>
            <HeroEvent></HeroEvent>
            <EventBanner></EventBanner>
            <EventContent></EventContent>
            {/* <EventSpeaker></EventSpeaker> */}
        </Layout>
    )
}