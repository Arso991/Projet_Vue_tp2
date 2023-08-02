<template>
    <div class="main">
        <div class="container">
            <div class="main__content">
                <div class="main__content__top">
                    <div class="main__content__top__icon">
                        <CoffeeIcon/>
                    </div>
                    <p>Total à payer</p>
                    <h1>12 000 Fcfa</h1>
                </div>
                <div class="main__content__center">
                    <p>Selectionner un mode de paiement</p>
                    <div class="paiement__mode">
                        <div class="paiement__mode__item">
                            <div class="paiement__mode__mobile" @click="firstClicked === false ? (firstClicked = true , secondClicked = false) : null">
                            <PhoneIcon/>
                            </div>
                            <p>Paiement mobile</p>
                        </div>
                        <div class="paiement__mode__item">
                            <div class="paiement__mode__card" @click="secondClicked === false ? (firstClicked = false , secondClicked = true) : null">
                            <CardIcon/>
                            </div>
                            <p>Carte de crédit</p>
                        </div>
                    </div>
                </div>
                <div>
                    <formDiv v-if="firstClicked === true"/>
                    <div class="main__content__bottom" v-else="secondClicked === true">
                        <h1>Pas disponible</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    import PhoneIcon from '@/components/PhoneIcon.vue';
    import CardIcon from '@/components/CardIcon.vue';
    import CoffeeIcon from '@/components/CoffeeIcon.vue';
    import formDiv from '@/components/formDiv.vue';
    import { ref } from 'vue';

    var firstClicked = ref(true);
    var secondClicked = ref(false);
     
    </script>
    
    <style>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .container{
        width: calc(100% - 60rem);
        height: calc(100vh - 8rem);
        box-shadow: 0 0 10px rgb(203, 201, 201);
    }

    .main__content__top{
        text-align: center;
        padding-top: 4rem;
        line-height: .5rem;
        background-color: rgb(211, 102, 102);
        width: 100%;
        height: 6rem;
        color: white;
    }

    .main__content__center{
        text-align: center;
        background-color: rgb(240, 188, 188);
        padding: .1rem;
        color: white;
    }

    .main__content__center p{
        color: black;
    }

    .paiement__mode{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .paiement__mode__mobile,
    .paiement__mode__card{
        padding: .3rem 1.2rem;
        border: 1px solid transparent;
        border-radius: 5px;
        line-height: .5rem;
        cursor: pointer;
    }

    .paiement__mode__item p{
        font-size: .8rem;
    }

    .paiement__mode__mobile{
        background-color: rgb(250, 49, 49);
    }

    .paiement__mode__card{
        border: 1px solid rgb(250, 49, 49);
        background-color: white;
        color: rgb(250, 49, 49);
    }

    .main__content__bottom form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .form__name,
    .form__number{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    button{
        padding: .8rem;
        border-radius: 5px;
        border: none;
        background-color: rgb(250, 49, 49);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .main__content__bottom h1{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }
    </style>