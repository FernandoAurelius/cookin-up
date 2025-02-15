<script lang="ts">
export default {
    name: 'Tag',
    props: {
        text: { type: String, required: true },
        active: Boolean
    }
}
</script>

<template>
    <span :class="['tag', { active }]">
        {{ text }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    /**
    * Per default, the tag will be inactive
    */
    color: var(--gray);
    background: var(--light-gray);
    font-weight: 400;
}

.active {
    color: var(--cream, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>