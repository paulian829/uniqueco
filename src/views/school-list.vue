<template>
<div id='university-list'>
    <div class="flex-list">
        <div v-for="{school} in data" :key='school.Name'><p>{{school}}</p></div>
    </div>
</div>
</template>

<script>

import unversityList from "../../manyschools.json"

export default {
    data() {
        return{
            data:unversityList
        }
    }

}
</script>

<style>

</style>