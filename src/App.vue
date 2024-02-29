<template>
<section>
 <h2> Friend List </h2>
 <ul>
  <li> <friend-contact></friend-contact> </li>
    <li> <friend-contact></friend-contact> </li>

 </ul></section> 
</template>

<script>

export default {
  data() {
    return {
      friends : [
        { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@example.com'},
        { id: 'julie', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@example.com'}
      ]
    }
  }
}

</script>