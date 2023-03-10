<template>
    <div class="container mx-auto h-2/3 flex-col sm:flex-row flex justify-center items-center sm:mt-16 mt-4">
        <div class="w-48 h-48 border-4 border-gray-400 mx-10">
            <!-- Hier kannst du dein eigenes Bild einfügen -->
            <img src="https://cdn.discordapp.com/avatars/703940533164441640/a_d1948d7af3178cefe64811bfe61baf1e.gif?size=100" alt=" " class="avatar-31d8He" aria-hidden="true">
        </div>
        <div class="text-4xl leading-loose text-center sm:text-left">
            Hi, <br> ich bin Alex
        </div>
    </div>
    <!-- Hier fügst du den Lorem ipsum Text hinzu -->
    <div class="container mx-auto mt-20 text-lg">
        Ich studiere Technische Informatik and der Berliner Hochschule für Technik. <br>
        In meiner Freizeit bin ich als Entwickler Teil des deutschen Bauteams des internationalen Projektes "BuildTheEarh 1:1". <br>
        Ansonsten spiele ich gerne Minecraft und schaue gerne Filme/Serien...
    </div>
</template>

<script setup>
useHead({
    title: 'homepage'
});
</script>