<?php

/**
 * Quick script to pull any maps needed from the XIV API.
 * mapdata.json is created from all responses listed on the https://xivapi.com/Map/ endpoint
 * Some area names have multiple image files, so these are manually cleaned to the correct one after
 */


$maps = json_decode(file_get_contents('src/assets/mapdata.json'), true);
$spells = json_decode(file_get_contents('src/assets/spells.json'), true);

$requiredMaps = [];

foreach ($spells as $spell) {
  foreach ($spell['locations'] as $location) {
    if ($location['type'] != 'Open World') continue;
    foreach ($maps as $map) {
      if ($location['area'] == $map['PlaceName']['Name']) {
        $requiredMaps[$map['ID']] = $map;
      }
    }
  }
}

foreach ($requiredMaps as $map) {
  $mapFile = file_get_contents('https://xivapi.com/' . $map['MapFilename']);
  file_put_contents('helpers/maps/' . $map['PlaceName']['Name'] . '-' . $map['ID'] . '.jpg', $mapFile);
}
