<template>
    <div>
        UserDetails component 
        <p>User Loaded with ID :{{ $route.params.id }}</p>
        <hr>
        <router-link tag="button" class="btn btn-warning" :to="link" > Edit User</router-link>

    </div>
   
</template>

<script>
export default {
    data(){
        return {
            link:{
                name: 'userEdit',
                params:{
                    id:$route.params.id
                },
                query:{
                    locale:'en',q:100
                },
                hash: '#data'
            }
        }
    }
}
</script>

------------------
  <template>
    <div>
        UserEdit component:
        <p>Locale :{{$route.query.locale}}</p>
        <p>Analytics :{{$route.query.q}}</p>

        <div style="height: 700px;"></div>
        <p id="data">Some extra data</p>
    </div>
   
</template>
