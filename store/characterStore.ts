export const api = "https://rickandmortyapi.com/api/character";

interface Characters {
    id: number;
    name: string;
    species: string;
    image: string;
    episode: string[];
    status: string;
}

interface CharacterStore {
    characters: Characters[];
    currentPage: number;
    totalPages: number;
    searchQuery: string;
    isLoading: boolean;
    selectedStatus: string;
}

export const useCharacterStore = defineStore('characterStore', {
    state: () => ({
        characters: [] as Characters[],
        currentPage: 1,
        totalPages: 0,
        searchQuery: '',
        isLoading: true,
        selectedStatus: 'all',
    }),

    actions: {
        async fetchCharacters(this: CharacterStore, page: number = this.currentPage) {
            try {
                this.isLoading = true;
                const response = await fetch(`${api}?page=${page}`);
                const charactersData = await response.json();
                this.characters = charactersData.results;
                this.totalPages = charactersData.info.pages;
                this.currentPage = page;
                this.isLoading = false;
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        },

        async searchCharactersByName(this: CharacterStore, name: string) {
            try {
                const response = await fetch(`${api}/?name=${name}`);
                const charactersData = await response.json();
                this.characters = charactersData.results;
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        },

        async fetchCharactersByStatus(this: CharacterStore, status: string) {
            try {
                this.isLoading = true;
                const response = await fetch(`${api}?status=${status}`);
                const charactersData = await response.json();
                this.characters = charactersData.results;
                this.totalPages = charactersData.info.pages;
                this.currentPage = 1;
                this.selectedStatus = status;
                this.isLoading = false;
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        },

        // setSelectedStatus(this: CharacterStore, status: string) {
        //     this.selectedStatus = status;
        // },

    },

    getters: {
        filteredCharacters(state) {
            const query = state.searchQuery.toLowerCase();
            return state.characters.filter((character) =>
                character.name.toLowerCase().includes(query)
            );
        },
    },
})