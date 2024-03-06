<script>
	import js from '$lib/images/dev/js.png';
	import python from '$lib/images/dev/python.png';
	import ts from '$lib/images/dev/ts.png';
	import java from '$lib/images/dev/java.png';
	import golang from '$lib/images/dev/golang.png';
	import csharp from '$lib/images/dev/csharp.png';

	import svelte from '$lib/images/dev/svelte.png';
	import sveltekit from '$lib/images/dev/sveltekit.png';
	import react from '$lib/images/dev/react.png';
	import next from '$lib/images/dev/next.png';
	import tailwind from '$lib/images/dev/tailwind.png';
	import bootstrap from '$lib/images/dev/bootstrap.png';
	import vue from '$lib/images/dev/vue.png';
	import astro from '$lib/images/dev/astro.svg';

	import firebase from '$lib/images/dev/firebase.png';
	import medusa from '$lib/images/dev/medusa.png';
	import node from '$lib/images/dev/node.png';
	import django from '$lib/images/dev/django.png';
	import contentful from '$lib/images/dev/contentful.png';

	import pytorch from '$lib/images/dev/pytorch.png';
	import jupiter from '$lib/images/dev/jupiter.png';
	import pandas from '$lib/images/dev/pandas.png';

	import postgres from '$lib/images/dev/postgres.png';
	import mysql from '$lib/images/dev/mysql.png';
	import mongodb from '$lib/images/dev/mongodb.png';
	import graphql from '$lib/images/dev/graphql.png';

	import github from '$lib/images/dev/github.png';
	import docker from '$lib/images/dev/docker.png';
	import kubernetes from '$lib/images/dev/kubernetes.png';
</script>

<div class="basis-1/3 flex flex-col gap-y-4">
	<a href="/dev#skills">
		<h2
			id="skills"
			style="--stagger:7"
			data-animate=""
			class="text-2xl font-bold decoration-4 text-stone-900 dark:text-white"
		>
			skills
		</h2>
	</a>

	<ol
		style="--stagger:8"
		data-animate=""
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-6 md:gap-y-8 text-lg decoration-4 font-semibold text-stone-900 dark:text-white"
	>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				Languages
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/javascript"
					title="JavaScript"
					target="_blank"
					><img
						src={js}
						alt="JavaScript"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.typescriptlang.org/" title="TypeScript" target="_blank"
					><img
						src={ts}
						alt="TypeScript"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.python.org/" title="Python" target="_blank"
					><img
						src={python}
						alt="Python"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.java.com/en/" title="Java" target="_blank"
					><img
						src={java}
						alt="Java"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://go.dev/" title="Golang" target="_blank"
					><img
						src={golang}
						alt="golang"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://dotnet.microsoft.com/en-us/languages/csharp" title="C#" target="_blank"
					><img
						src={csharp}
						alt="csharp"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				Frontend
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a href="https://www.svelte.dev" title="Svelte" target="_blank"
					><img
						src={svelte}
						alt="svelte"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://kit.svelte.dev/" title="Sveltekit" target="_blank"
					><img
						src={sveltekit}
						alt="sveltekit"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<!-- <a href="https://vuejs.org/" title="Vue" target="_blank"><img src="{vue}" alt="vue" class="w-[45px]  h-[45px]  rounded-full grayscale group-hover:grayscale-0 transition duration-300 object-cover hover:scale-125"></a> -->
				<a href="https://react.dev/" title="React" target="_blank"
					><img
						src={react}
						alt="react"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://nextjs.org/" title="Next" target="_blank"
					><img
						src={next}
						alt="next"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<!-- <a href="https://www.svelte.dev" title="Astro" target="_blank"><img src="{astro}" alt="astro" class="w-[45px]  h-[45px]  rounded-full grayscale group-hover:grayscale-0 transition duration-300 object-cover hover:scale-125"></a> -->
				<a href="https://www.tailwindcss.com" title="Tailwind" target="_blank"
					><img
						src={tailwind}
						alt="tailwind"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://getbootstrap.com/" title="Bootstrap" target="_blank"
					><img
						src={bootstrap}
						alt="bootstrap"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				Backend
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a href="https://firebase.google.com/" title="Firebase" target="_blank"
					><img
						src={firebase}
						alt="firebase"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://nodejs.org/en" title="Node" target="_blank"
					><img
						src={node}
						alt="node"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.djangoproject.com/" title="Django" target="_blank"
					><img
						src={django}
						alt="django"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.medusajs.com" title="Medusa" target="_blank"
					><img
						src={medusa}
						alt="medusa"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.contentful.com/" title="Contentful" target="_blank"
					><img
						src={contentful}
						alt="contentful"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://graphql.org/" title="GraphQL" target="_blank"
					><img
						src={graphql}
						alt="graphql"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				Machine Learning
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a href="https://pytorch.org/" title="PyTorch" target="_blank"
					><img
						src={pytorch}
						alt="pytorch"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://jupyter.org/" title="Jupiter" target="_blank"
					><img
						src={jupiter}
						alt="jupiter"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://pandas.pydata.org/" title="Pandas" target="_blank"
					><img
						src={pandas}
						alt="pandas"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				Databases
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a href="https://www.postgresql.org/" title="PostgreSQL" target="_blank"
					><img
						src={postgres}
						alt="postgres"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.mysql.com/" title="MySQL" target="_blank"
					><img
						src={mysql}
						alt="mysql"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.mongodb.com/" title="MongoDB" target="_blank"
					><img
						src={mongodb}
						alt="mongodb"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
		<li class="flex flex-col items-start justify-start gap-y-2 group transition duration-300">
			<p
				class="text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 transition duration-300"
			>
				DevOps
			</p>
			<div class="grid grid-cols-3 gap-x-4 gap-y-2 justify-start">
				<a href="https://www.github.com" title="Github" target="_blank"
					><img
						src={github}
						alt="github"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.docker.com" title="Docker" target="_blank"
					><img
						src={docker}
						alt="docker"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
				<a href="https://www.kubernetes.io/" title="Kubernetes" target="_blank"
					><img
						src={kubernetes}
						alt="kubernetes"
						class="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 dark:grayscale-0 transition duration-300 object-cover hover:scale-125"
					/></a
				>
			</div>
		</li>
	</ol>
</div>

