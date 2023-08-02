<template>
    <div class="main__content__bottom" v-if="firstClicked === true">
        <form action="">
            <div class="form__name">
                <label for="name">Nom et Prénoms</label>
                <input type="text">
            </div>
            <div class="form__number">
                <label for="call">Numéro de téléphone</label>
                <input type="number">
            </div>
            <button>Payer 12 000 Fcfa</button>
        </form>
    </div>
</template>

<style>
</style>