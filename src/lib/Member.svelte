<script>
	export let member;
</script>

<div class="card">
	<div class="info">
		<img src={member.avatar.image.url} alt={member.avatar.caption} />
		<div class="main-info">
			<span>
				<b>{member.name}</b>
			</span>
			<span>{member.role}</span>
			<a href="mailto:{member.email}">{member.email}</a>
		</div>
	</div>

	<div class="expanded-info">
		{@html member.bio}
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		align-items: center;
		margin-bottom: 4rem;
		border-bottom: 2px solid #f0f0f0;
	}

	.main-info {
		display: flex;
		flex-direction: column;
	}

	.info {
		display: flex;
		width: 100%;
	}

	.expanded-info {
		margin-top: 2rem;
	}

	.expanded-info :global(p) {
		margin-bottom: 1rem;
	}

	img {
		height: 80px;
		width: 80px;
		object-fit: cover;
		object-position: center;
		margin-right: 1rem;
		border-radius: 50%;
	}

	@media (max-width: 530px) {
		.info {
			flex-direction: column;
			align-items: center;
		}

		.main-info {
			margin-top: 1rem;
			align-items: center;
		}
		.expanded-info {
			text-align: center;
			margin-top: 1.5rem;
		}

		img {
			margin-right: 0;
		}
	}

	a {
		text-decoration: none;
		color: var(--text-color);
		&:hover {
			text-decoration: underline;
		}
	}
</style>
