<template>
    <div>
        <div v-if="store.message" class="alert alert-dismissible mt-1" :class="[{'alert-danger': store.isError},{'alert-success': store.isSuccess}]">
            <button type="button" @click="closeNotification" class="btn close" data-dismiss="alert">&times;</button>
            {{store.message}}
        </div>
    </div>
</template>

<script setup>
    import {store, actions} from "../../store/store"

    function closeNotification(){
        actions.setMessage('');
        actions.setSuccess(false);
        actions.setError(false);
    }

</script>