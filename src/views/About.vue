<template>
    <div>
        <a-input placeholder="Basic usage" v-model="val" @keydown.13="addItem" />
        <ul v-for="(item, key) in lists">
            <li key="key">{{item}}<a-button type="danger" ghost style="margin-left: 30px" @click="Delete(key)">del</a-button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "about",
    data() {
        return {
            val: '',
            lists: [],
        };
    },
    methods: {
        addItem: function () {
            console.log(this.val);
            this.lists.push(this.val);
            this.val = '';
        },
        Delete: function(key) {
//            console.log(key);
            this.lists.splice(key, 1);
        }
    },
};
</script>