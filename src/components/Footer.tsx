import React, { ReactElement } from 'react'
import Image from 'next/image'
import { Heading, BodyShort } from '@navikt/ds-react'

import logo from '../images/logo.png'

function Footer(): ReactElement {
    return (
        <footer className="border-t border-t-border-subtle mt-4 p-4 flex">
            <Image
                className="object-contain grayscale hover:grayscale-0 transition-all hidden sm:block"
                src={logo}
                alt=""
                aria-hidden
                height={128}
                quality={100}
            />
            <div className="pl-4 mt-4">
                <Heading size="medium" level="2">
                    Helsesjekk er basert på åpen kildekode originalt utviklet av NAV. For NRK er utvikling og
                    vedlikehold gjort av Påloggingsteamet.
                </Heading>
                <BodyShort>
                    Feedback og bugs kan rapporteres på slack på{' '}
                    <a
                        href="https://nrk.enterprise.slack.com/archives/C07TCLY8T2Q"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        #helsesjekk-bot
                    </a>
                </BodyShort>
                <BodyShort>
                    Kildekoden er tilgjengelig på{' '}
                    <a href="https://github.com/nrkno/helsesjekk-bot" target="_blank" rel="noopener noreferrer">
                        github.com/nrkno/helsesjekk-bot
                    </a>
                </BodyShort>
            </div>
        </footer>
    )
}

export default Footer
