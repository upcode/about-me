
   var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Design Process",
            "fontSize": 28,
            "font": "Playfair Display"
        },
        "subtitle": {
            "text": "Engineering Design Process ",
            "color": "#18bc9c",
            "fontSize": 16,
            "font": "Playfair Display"
        },
        "location": "pie-center",
        "titleSubtitlePadding": 10
    },

    "size": {
        "canvasWidth": 900,
        "pieInnerRadius": "60%",
        "pieOuterRadius": "110%"
    },
    "data": {
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 5,
            "valueType": "value",
            "color": "#cfc0c0"
        },
        "content": [
            {
                "label": "Define the problem",
                "value": 25,
                "color": "#3182bd",
                "opacity": 0.3


                // define the problem
            },
            {
                "label": "Research",
                "value": 25,
                "color": "#ff7f0e"
                // collect the information
                // researc the need or problem
            },
            {
                "label": "Brainstorm",
                "value": 25,
                "color": "#2ca02c"
                // brainstrom and analyze the ideas
                // develop the posssible soliutions
            },
            {
                "label": "Choose",
                "value": 25,
                "color": "#d62728"
                // develop the solution
                // select the best solution
            },
            {
                "label": "Build",
                "value": 25,
                "color": "#9467bd"
                // construct a prototype
            },
            {
                "label": "Test",
                "value": 25,
                "color": "#e377c2"
                // test and evaluate the solutions
            },
            {
                "label": "Results",
                "value": 25,
                "color": "#17becf"
                //communcaite the solutions
            },
            {
                "label": "Redesign",
                "value": 25,
                "color": "#d62728"
                // redesign after feedback
            }
        ]
    },
    "labels": {
        "outer": {
            "hideWhenLessThanPercentage": 10,
            "pieDistance": 15
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 12
        },
        "mainLabel": {
            "font": "Playfair Display",
            "fontSize": 15
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 2
        },
        "lines": {
            "enabled": true,
            "style": "straight"
        },
        "truncation": {
            "enabled": true,
            "truncateLength": 50
        }
    },

    "effects": {
        "load": {
            "speed": 1350
        },
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 20
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 50,
            "opacity": 50
        }
    },
    "callbacks": {
        "onMouseoverSegment": null,
        "onMouseoutSegment": null
    }

    });