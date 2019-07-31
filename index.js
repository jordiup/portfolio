import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills /> 
		<Contact />

		<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.4.0/lib/darkmode-js.min.js"></script>
		<script>
			new Darkmode().showWidget();
		</script>
	</Layout>
)
