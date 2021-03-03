<template>
    <a class="downbutton">
        <i class="fa fa-angle-double-down firstone" aria-hidden="true"></i>
        <i class="fa fa-angle-double-down" aria-hidden="true"></i>
    </a>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "DownButton",
});
</script>

<style lang="scss">
    .downbutton {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 80px;

        i {
            position: absolute;
            width: 50px;
        }

        .firstone {
            transform: translateY(-19px);
        }
    }
</style>