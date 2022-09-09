<template>
    <v-app>
        <v-app-bar>

            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>
                App bar missing nav icon
            </v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container>
                <v-responsive class="mx-auto" max-width="450">
                    <v-select :items="items" label="Select input missing down arrow and clearable icons" clearable ></v-select>
                    <br>
                    <v-text-field label="Text field missing clearable icon" clearable></v-text-field>
                    <br>
                    <v-alert type="info" >
                        Alerts missing icon
                    </v-alert>
                </v-responsive>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const items = ref(['Foo', 'Bar', 'Fizz', 'Buzz']);
</script>

<style scoped>
</style>