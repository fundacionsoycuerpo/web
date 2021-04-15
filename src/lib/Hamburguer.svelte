<script>
	import { menuIsOpen } from '../stores';

	function toggle() {
		menuIsOpen.update((isOpen) => !isOpen);
	}
</script>

<button
	on:click={toggle}
	class={$menuIsOpen ? 'open' : ''}
	aria-label={$menuIsOpen ? 'Close menu' : 'Open menu'}
>
	<span />
	<span />
	<span />
</button>

<style lang="scss">
	button {
		padding: 10px;
		border: 0;
		background: none;
	}
	span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		z-index: 8;
		background: #cdcdcd;
		border-radius: 3px;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

		&:first-child {
			transform-origin: 0% 0%;
		}
		&:nth-last-child(2) {
			transform-origin: 0% 100%;
		}
	}

	/*
 * open
 */
	.open span {
		opacity: 1;
		transform: rotate(45deg) translate(5px, -4px);
		/* background: #232323; */
		&:nth-last-child(2) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}
		&:nth-child(3) {
			opacity: 1;
			transform: rotate(-45deg) translate(-1px, 3px);
		}
	}
</style>
