import React from "react";


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'All'
        };
        this.projects = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
        }]
    }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter});
    };

    render () {
        const {selectedFilter} = this.state;
        const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

        const FilteredProject = selectedFilter === 'All'
        ? this.projects
        : this.projects.filter(project => project.category === selectedFilter);


        return(
            <div className="portfolio">
                <Toolbar
                    filters = {filters}
                    selected = {selectedFilter}
                    onSelectFilter = {this.handleSelectFilter}
                />
                <ProjectList projects = {FilteredProject} />
            </div>
        );
    }
}

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="toolbar">
            {filters.map(filter =>
                <button
                    key={filter}
                    className={filter === selected ? 'active' : ''}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            )}
        </div>
    );
};

const ProjectList = ({projects}) => {
    return (
        <div className="project-list">
            {projects.map((project, index) =>
            <img
                key={index}
                src={project.img}
                alt={project.category}
                className="project-image"
            />    
            )}
        </div>
    )
}

export default Portfolio