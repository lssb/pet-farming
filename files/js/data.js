/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '2.1.3',
  petList: [
    { name: 'Hippong', fragments: 0, img: 94, farm: true, index: 40, defaultTier: 1 },
    { name: 'Tinkey', fragments: 10, img: 6, farm: true, index: 13, defaultTier: 2 },
    { name: 'Icy', fragments: 10, img: 17, farm: true, index: 16, defaultTier: 3 },
    { name: 'Cat Knight', fragments: 0, img: 136, farm: true, index: 47, defaultTier: 4 },
    { name: 'Boom', fragments: 10, img: 28, farm: true, index: 19, defaultTier: 5 },
    { name: 'Wakong', fragments: 0, img: 43, farm: true, index: 30, defaultTier: 6 },
    { name: 'Octopa', fragments: 0, img: 139, farm: true, index: 50, defaultTier: 7 },
    { name: 'Bamba', fragments: 0, img: 115, farm: true, index: 46, defaultTier: 8 },
    { name: 'Cerbero', fragments: 0, img: 138, farm: true, index: 49, defaultTier: 9 },
    { name: 'Seahorse', fragments: 0, img: 51, farm: true, index: 34, defaultTier: 10 },
    { name: 'Moon', fragments: 10, img: 19, farm: true, index: 18, defaultTier: 11 },
    { name: 'Sarah', fragments: 0, img: 55, farm: true, index: 35, defaultTier: 12 },
    { name: 'E-77', fragments: 0, img: 48, farm: true, index: 31, defaultTier: 13 },
    { name: 'DarkSnake', fragments: 0, img: 50, farm: true, index: 33, defaultTier: 14 },
    { name: 'Windy', fragments: 0, img: 49, farm: true, index: 32, defaultTier: 15 },
    { name: 'Athos', fragments: 0, img: 201, farm: true, index: 51, defaultTier: 16 },
    { name: 'Grizzle', fragments: 0, img: 202, farm: true, index: 52, defaultTier: 17 },
    { name: 'Raven', fragments: 0, img: 203, farm: true, index: 53, defaultTier: 18 },
    { name: 'Leyak', fragments: 0, img: 204, farm: true, index: 54, defaultTier: 19 },
    { name: 'Osma', fragments: 0, img: 95, farm: true, index: 41, defaultTier: 20 },
    { name: 'Saul', fragments: 0, img: 96, farm: true, index: 42, defaultTier: 21 },
    { name: 'Rena', fragments: 0, img: 93, farm: true, index: 39, defaultTier: 22 },
    { name: 'Bernard', fragments: 0, img: 112, farm: true, index: 43, defaultTier: 23 },
    { name: 'ChiChi', fragments: 0, img: 113, farm: true, index: 44, defaultTier: 24 },
    { name: 'Mori', fragments: 0, img: 137, farm: true, index: 48, defaultTier: 25 },
    { name: 'Mambo', fragments: 10, img: 1, farm: true, index: 0, defaultTier: 26 },
    { name: 'Totem', fragments: 10, img: 16, farm: true, index: 15, defaultTier: 27 },
    { name: 'Lamp', fragments: 10, img: 13, farm: true, index: 12, defaultTier: 28 },
    { name: 'Sleepy', fragments: 10, img: 15, farm: true, index: 14, defaultTier: 29 },
    { name: 'Jingger', fragments: 0, img: 38, farm: true, index: 25, defaultTier: 30 },
    { name: 'Oscar', fragments: 0, img: 56, farm: true, index: 36, defaultTier: 31 },
    { name: 'Nimbus', fragments: 0, img: 37, farm: true, index: 24, defaultTier: 32 },
    { name: 'Mir', fragments: 10, img: 36, farm: true, index: 23, defaultTier: 33 },
    { name: 'Squirrel', fragments: 10, img: 18, farm: true, index: 17, defaultTier: 34 },
    { name: 'Phoenic', fragments: 10, img: 9, farm: true, index: 8, defaultTier: 35 },
    { name: 'Devil', fragments: 10, img: 27, farm: true, index: 21, defaultTier: 36 },
    { name: 'Chesher', fragments: 0, img: 114, farm: true, index: 45, defaultTier: 37 },
    { name: 'Winky', fragments: 0, img: 40, farm: true, index: 27, defaultTier: 38 },
    { name: 'Cora', fragments: 0, img: 42, farm: true, index: 29, defaultTier: 39 },
    { name: 'Bunny', fragments: 0, img: 41, farm: true, index: 28, defaultTier: 40 },
    { name: 'Indy', fragments: 10, img: 10, farm: true, index: 9, defaultTier: 41 },
    { name: 'Snork', fragments: 10, img: 8, farm: true, index: 7, defaultTier: 42 },
    { name: 'Piggy', fragments: 10, img: 4, farm: true, index: 3, defaultTier: 43 },
    { name: 'Rapty', fragments: 0, img: 39, farm: true, index: 26, defaultTier: 44 },
    { name: 'Black', fragments: 0, img: 57, farm: true, index: 37, defaultTier: 45 },
    { name: 'Juda', fragments: 0, img: 58, farm: true, index: 38, defaultTier: 46 },
    { name: 'Joe', fragments: 10, img: 2, farm: false, index: 1, defaultTier: 47 },
    { name: 'Mummy', fragments: 10, img: 3, farm: false, index: 2, defaultTier: 48 },
    { name: 'Potang', fragments: 10, img: 5, farm: false, index: 4, defaultTier: 49 },
    { name: 'Uni', fragments: 10, img: 14, farm: false, index: 5, defaultTier: 50 },
    { name: 'Joker', fragments: 10, img: 7, farm: false, index: 6, defaultTier: 51 },
    { name: 'Grim', fragments: 10, img: 11, farm: false, index: 10, defaultTier: 52 },
    { name: 'Woola', fragments: 10, img: 12, farm: false, index: 11, defaultTier: 53 },
    { name: 'Leo', fragments: 10, img: 26, farm: false, index: 20, defaultTier: 54 },
    { name: 'Griffy', fragments: 10, img: 29, farm: false, index: 22, defaultTier: 55 },
    { name: 'LittleHawk', fragments: 10, img: 183, true: true, index: 56, defaultTier: 56 },
    { name: 'Foxy', fragments: 10, img: 184, farm: true, index: 57, defaultTier: 57 },
    { name: 'Shadow', fragments: 10, img: 185, farm: true, index: 58, defaultTier: 58 },
    { name: 'Snow Bear', fragments: 10, img: 186, farm: true, index: 59, defaultTier: 59 },
    { name: 'Combat', fragments: 10, img: 207, farm: true, index: 60, defaultTier: 60 },,
    { name: 'Rolly', fragments: 10, img: 208, farm: true, index: 61, defaultTier: 61 },,
    { name: 'Scourge', fragments: 10, img: 209, farm: true, index: 62, defaultTier: 62 },,
    { name: 'Lazy', fragments: 10, img: 210, farm: true, index: 63, defaultTier: 63 },
  ],
  SHList: [],
  KL: 100,
  entries: 10,
  refills: 3,
  gemCostArray: [0, 100, 300, 700, 1500, 2700, 4300],
  farmList: [],
};

// Load saved data if it exists
const savedData = JSON.parse(localStorage.getItem('data')) || false;
let data;
if (savedData) {
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    data = _.cloneDeep(originalData);
  }
} else {
  data = _.cloneDeep(originalData);
}

const orderedPetList = _.orderBy(data.petList, 'index');
for (let i = 0; i < orderedPetList.length * 2 + 10; i++) {
  data.SHList[i] = [{}, {}];
}

// Create SH pages
for (let i = 0; i < orderedPetList.length; i++) {
  data.SHList[i][0].img = orderedPetList[i].img;
  data.SHList[i][0].name = orderedPetList[i].name;
  data.SHList[i + orderedPetList.length][0].img = orderedPetList[i].img;
  data.SHList[i + orderedPetList.length][0].name = orderedPetList[i].name;
  if (i < 5) {
    data.SHList[i][1].img = orderedPetList[i].img;
    data.SHList[i][1].name = orderedPetList[i].name;
  } else {
    data.SHList[(i - 2) * 2][1].img = orderedPetList[i].img;
    data.SHList[(i - 2) * 2][1].name = orderedPetList[i].name;
  }
  data.SHList[i * 2 + 5][1].img = orderedPetList[i].img;
  data.SHList[i * 2 + 5][1].name = orderedPetList[i].name;
}

// Create SH page numbers
for (let i = 0, page = 1, pageIndex = 1; i < data.SHList.length; i++) {
  data.SHList[i][0].KLReq = `${i * 2 + 2}`;
  data.SHList[i][0].stage = `${page}-${pageIndex}`;
  pageIndex += 4;
  data.SHList[i][1].stage = `${page}-${pageIndex}`;
  pageIndex++;
  if (pageIndex > 20) {
    pageIndex = 1;
    page++;
  }
}

// Trim off excess stages
data.SHList.length = data.petList.length * 2 - 4;

const vm = new Vue({
  el: '#app',
  data,
  created() {
    this.updateFarmList();
  },
  watch: {
    petList: {
      handler(val) {
        this.updateFarmList();
      },
    },
    KL() {
      this.updateFarmList();
    },
    entries() {
      this.updateFarmList();
    },
    refills() {
      this.updateFarmList();
    },
  },
  computed: {
    orderedPetList() {
      return _.orderBy(data.petList, 'index');
    },
  },
  methods: {
    getPet(petName) {
      let pet = data.petList[0];
      for (let i = 1; i < data.petList.length; i++) {
        if (data.petList[i].name === petName) {
          pet = data.petList[i];
        }
      }
      return pet;
    },
    reorderPetList({ oldIndex, newIndex }) {
      const movedItem = data.petList.splice(oldIndex, 1)[0];
      data.petList.splice(newIndex, 0, movedItem);
    },
    resetTierList() {
      data.petList = _.orderBy(data.petList, 'defaultTier');
    },
    addFarmedFrags() {
      for (const pet of data.petList) {
        pet.fragments += pet.farmableFrags;
      }
      this.updateFarmList();
    },
    updateFarmList() {
      // Reset farmableFrags to zero on all pets
      _.forEach(data.petList, (obj) => {
        _.set(obj, 'farmableFrags', 0);
      });

      // Save data
      localStorage.setItem('data', JSON.stringify(data));

      data.farmList = _.filter(data.petList, obj => obj.fragments < 330 && obj.farm);
      let tickets = data.entries + data.refills * 5;

      for (const pet of data.farmList) {
        const availableFrags = _.filter(data.SHList, obj => obj[0].KLReq <= data.KL && (obj[0].name === pet.name || obj[1].name === pet.name));
        pet.farmableFrags = 0;
        if (availableFrags !== []) {
          let firstStageFrags = 3;
          if (pet.index >= data.petList.length - 4) {
            // Newest pets only have 1 frag on first stage
            firstStageFrags = 1;
          }
          for (let i = 0; i < availableFrags.length; i++) {
            if (availableFrags[i][0].name === pet.name) {
              pet.farmableFrags += firstStageFrags;
              // Only the first first stage has 3 frags
              if (firstStageFrags === 3) {
                firstStageFrags = 1;
              }
            }
            if (availableFrags[i][1].name === pet.name) {
              pet.farmableFrags += 3;
            }
          }
        }
        // If we're farming more frags than needed to finish the pet, remove the excess, or more than we have remaining tickets, remove excess
        pet.farmableFrags = pet.farmableFrags > 330 - pet.fragments ? 330 - pet.fragments : pet.farmableFrags;
        pet.farmableFrags = pet.farmableFrags > tickets ? tickets : pet.farmableFrags;
        pet.daysRemaining = Math.ceil((330 - pet.fragments) / pet.farmableFrags);
        tickets -= pet.farmableFrags;
        if (tickets <= 0) {
          break;
        }
      }
      data.farmList = _.filter(data.farmList, obj => obj.farmableFrags > 0);
    },
  },
});
