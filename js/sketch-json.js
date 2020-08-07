var sketch = {
  "metadata": {
    "width": 1227,
    "height": 750,
    "wsp-version": "4.5.1",
    "wsp-build-number": "1020.5-r",
    "wsp-build-stamp": "ip-10-149-70-76/20160706131225",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L04 Multiplying Integers.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 750,
          "right": 1227
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "rgb(0,121,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16,
              "font-weight": "normal",
              "color": "blue"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 14,
              "color": "navy"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 743,
              "y": 32
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "2"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 17,
              "y": 81
            }
          },
          "textMFS": "<VL<T'factor x factor = product'><T'  '><H<T'from Latin '><SS2<T'producere'>><T' \\\"something produced\\\"'>><H<T'from Latin '><SS2<T'factor'>><T' \\\"doer or maker\\\" '>><T'  '><T'Why are the numbers operated on given the same names in multiplication?'><0><0><T'How do you think multiplication is related to addition?'><0>>"
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 21,
              "y": 23
            }
          },
          "textMFS": "<T'Multiplying Two Integers '>",
          "style": {
            "text-decoration": "underline",
            "color": "black"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 30,
          "left": 14,
          "bottom": 780,
          "right": 1241
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "navy"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1277,
              "y": 213
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5.091708499685971",
          "label": "first integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1264,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6.104078550772696",
          "label": "second integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 157
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "8": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "10": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 784,
              "y": 60
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "3"
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "# groups=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "latentVisibility": true,
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 420
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 443
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1",
          "latentVisibility": true,
          "label": "-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 410
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2",
          "latentVisibility": true,
          "label": "-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-3",
          "latentVisibility": true,
          "label": "-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 458
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-4",
          "latentVisibility": true,
          "label": "-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 482
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "latentVisibility": true,
          "label": "-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "24": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 59,
              "y": 54
            }
          },
          "textMFS": "<T'Multiplying Two Integers Investigation - First Factor Positive '>",
          "style": {
            "font-size": 20,
            "color": "black"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 278,
              "y": 207
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 277,
              "y": 178
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 330,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 331,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 363,
              "y": 219
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 366,
              "y": 218
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 674
            }
          },
          "textMFS": "<T'Adding or removing groups of zero will still give zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 714
            }
          },
          "textMFS": "<T'0 groups of 0 is zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 274,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 216,
              "y": 235
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 259,
              "y": 205
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 148,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "47": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 54,
              "y": 497
            }
          },
          "textMFS": "<VL<H<T'What happens when the '><SS2<T'first'>><T' factor is positive? How does the model represent this?'>><0><0><H<T'What happens when the '><SS2<T'second '>><T'factor is positive?  How does the model represent this?'>><0><0><H<T'What happens when the '><SS2<T'second'>><T' factor is negative?  How does the model represent this?'>>>",
          "style": {
            "text-decoration": "none",
            "color": "green"
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 159
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.091586046937468",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 182
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1553086947233497",
          "label": "sign 2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "50": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "48",
            "3": "49"
          },
          "geom": {
            "loc": {
              "x": 384,
              "y": 102
            }
          },
          "label": "New Product",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Product"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2.0999999046325684,
              "upperParamBound": 5.800000190734863,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 1.5,
              "upperParamBound": 8.499899864196777,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 1,
              "upperParamBound": 2,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -2,
              "upperParamBound": 1,
              "discrete": false
            }
          ]
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 205
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 222
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign 2>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign 2>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51",
            "1": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 273
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 759,
              "y": -111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*trunc(@1)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 248
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 266
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "center": "43",
            "measure": "62"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "66": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "center": "25",
            "measure": "66"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 642
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "70": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "center": "27",
            "measure": "69"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 573
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 529
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 485
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "77"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 441
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "82": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "83": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "82"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 589
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "84"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 545
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "87"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "89": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "88"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "15"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "90"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "91"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 457
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "94": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "93"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<one)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "94"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 413
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 772,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 135
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 290
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*round(@1)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "101",
            "1": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "103": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "101",
            "1": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "104": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 275
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "105": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "106": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "99"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 694
            }
          },
          "textMFS": "<H<T'Adding 0 groups of '><?1xC0001<H<T'6'>>><T' will still give zero.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "107": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "108": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107",
            "1": "64"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 868
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[2]=0)^(\u00ac(m[1]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "109": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40",
            "center": "39",
            "measure": "109"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "111": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "110",
            "text": "37"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "112": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "113": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61",
            "1": "112"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(\u00ac(m[2]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "114": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "113"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "41",
            "measure": "114"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "116": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "115",
            "text": "106"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "117": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61",
            "1": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 824
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "118": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "117"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "45",
            "measure": "118"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "120": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "119",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "121": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "122": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65",
            "1": "121"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 763
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "123": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "122"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "center": "31",
            "measure": "123"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68",
            "1": "121"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "33",
            "measure": "126"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "128": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 678
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65",
            "1": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "130": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "129"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "131": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "center": "29",
            "measure": "130"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68",
            "1": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "132"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "36",
            "center": "35",
            "measure": "133"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "135": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "96"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 711
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'5'>>><T'('><?1xC0002<H<T'6'>>><T') can be viewed as removing '><?1xC0003<H<T'5'>>><T' groups of '><?1xC0002<H<T'6'>>><T' from zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "136": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "67",
            "text": "135"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "137": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "96"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 645
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'5'>>>><T'('><?1xC0002<H<T'6'>>><T') can be viewed as adding '><?1xC0003<H<T'5'>>><T' groups of '><?1xC0002<H<T'6'>>><T' to zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "138": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "63",
            "text": "137"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "139": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "70",
            "text": "137"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "140": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "141": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "140"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 364
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "142": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "140"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 506,
              "y": 98
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'5'>>><T'('><?1xC0002<H<T'6'>>><T') = '><?1xC0003<H<T'30'>>>>>",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "143": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "144": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 689
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'5'>>>><T' groups of '><?1xC0002<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters were added giving a total of '><?1xC0003<H<T'30'>>><T' '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "145": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "127",
            "text": "144"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "146": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 667
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'5'>>>><T' groups of '><?1xC0002<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters were added giving a total of '><?1xC0003<H<T'30'>>><T' '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "147": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "134",
            "text": "146"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "148": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 733
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'5'>>><T' groups of '><?1xC0002<H<T'6'>>><T' '><SR100G1L1<T'red'>><T' counters were removed leaving '><?1xC0003<H<T'30'>>><T' more '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "149": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "131",
            "text": "148"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "150": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 755
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'5'>>><T' groups of '><?1xC0002<H<T'6'>>><T' '><SR1G1L100<T'blue'>><T' counters were removed leaving '><?1xC0003<H<T'30'>>><T' more '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "151": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "124",
            "text": "150"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "152": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "153": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "56",
            "2": "99",
            "3": "4",
            "4": "5",
            "5": "96",
            "6": "143",
            "7": "97",
            "8": "152",
            "9": "6",
            "10": "7",
            "11": "8",
            "12": "9",
            "13": "59",
            "14": "57",
            "15": "11",
            "16": "60",
            "17": "58",
            "18": "12",
            "19": "100",
            "20": "101",
            "21": "105",
            "22": "104",
            "23": "13",
            "24": "14",
            "25": "15",
            "26": "16",
            "27": "17",
            "28": "18",
            "29": "19",
            "30": "20",
            "31": "21",
            "32": "22",
            "33": "23",
            "34": "93",
            "35": "90",
            "36": "87",
            "37": "84",
            "38": "81",
            "39": "94",
            "40": "91",
            "41": "88",
            "42": "85",
            "43": "82",
            "44": "95",
            "45": "92",
            "46": "89",
            "47": "86",
            "48": "83",
            "49": "79",
            "50": "77",
            "51": "75",
            "52": "73",
            "53": "71",
            "54": "80",
            "55": "78",
            "56": "76",
            "57": "74",
            "58": "72",
            "59": "103",
            "60": "102",
            "61": "140",
            "62": "135",
            "63": "141",
            "64": "148",
            "65": "150",
            "66": "137",
            "67": "146",
            "68": "144",
            "69": "68",
            "70": "65",
            "71": "128",
            "72": "121",
            "73": "132",
            "74": "125",
            "75": "129",
            "76": "122",
            "77": "61",
            "78": "107",
            "79": "64",
            "80": "112",
            "81": "37",
            "82": "106",
            "83": "38"
          },
          "geom": {
            "loc": {
              "x": 1447,
              "y": 65
            }
          },
          "label": "Show Objects",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "154": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 60,
              "y": 95
            }
          },
          "textMFS": "<VL<H<T'first integer = '><?1xC0001<H<T'5'>>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "red"
          }
        },
        "155": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "99"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 205,
              "y": 98
            }
          },
          "textMFS": "<H<T'second integer = '><?1xC0001<H<T'6'>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "156": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 57,
              "y": 532
            }
          },
          "textMFS": "<VL<H<T'groups of counters are '><SS2<T'added'>><T' to zero, the magnitude of the integer is the number of groups'>><0><0><T'positve counters are added; the colour of the counters is red'><0><0><T'negative counters are added; the colour of the counters is blue'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "text-decoration": "none"
          }
        },
        "157": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "156"
          },
          "geom": {
            "loc": {
              "x": 806,
              "y": 434
            }
          },
          "label": "Show Solution",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Solution",
            "Show Solution"
          ]
        },
        "158": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 687,
              "y": 60
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "1"
        },
        "159": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -27,
              "y": 243
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "160": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 311,
              "y": -85
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 311,
              "y": -62
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "162": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 311,
              "y": -39
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "163": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 311,
              "y": -16
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 311,
              "y": 7
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "165": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "166": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "165",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "167": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "166"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 62
          }
        },
        "168": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "167",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 67
          }
        },
        "169": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "160",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1045,
              "y": -111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "170": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "169",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 758,
              "y": -84
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "171": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "165",
            "1": "166",
            "2": "167",
            "3": "168",
            "preimage0": "159",
            "map0image0": "165",
            "depth": "170"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "172": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "166",
            "map": "171"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "173": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "168",
            "map": "171"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 72
          }
        },
        "174": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1045,
              "y": -89
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "175": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "174",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 758,
              "y": -59
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "176": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "162",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1045,
              "y": -67
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "177": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "176",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 758,
              "y": -34
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "178": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "163",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1045,
              "y": -45
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "178",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 758,
              "y": -9
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1045,
              "y": -23
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "180",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 758,
              "y": 15
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "182": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "159",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "183": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "182",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "184": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "183",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "185": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "184"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 63
          }
        },
        "186": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "185",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 68
          }
        },
        "187": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "183",
            "1": "184",
            "2": "185",
            "3": "186",
            "preimage0": "182",
            "map0image0": "183",
            "depth": "175"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "188": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "184",
            "map": "187"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "189": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "186",
            "map": "187"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 73
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "182",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "191": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "192": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "191",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "193": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "192"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 64
          }
        },
        "194": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "193",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 69
          }
        },
        "195": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "191",
            "1": "192",
            "2": "193",
            "3": "194",
            "preimage0": "190",
            "map0image0": "191",
            "depth": "177"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "196": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "192",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "197": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "194",
            "map": "195"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 74
          }
        },
        "198": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "190",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "199": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "198",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "200": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "199",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "201": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "200"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 65
          }
        },
        "202": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "201",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 70
          }
        },
        "203": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "199",
            "1": "200",
            "2": "201",
            "3": "202",
            "preimage0": "198",
            "map0image0": "199",
            "depth": "179"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "204": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "200",
            "map": "203"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "205": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "202",
            "map": "203"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 75
          }
        },
        "206": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "198",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "206",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "208": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "207",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "209": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "208"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 66
          }
        },
        "210": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "209",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 71
          }
        },
        "211": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "207",
            "1": "208",
            "2": "209",
            "3": "210",
            "preimage0": "206",
            "map0image0": "207",
            "depth": "181"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "212": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "208",
            "map": "211"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "213": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "210",
            "map": "211"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 76
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": 37,
          "left": 31,
          "bottom": 787,
          "right": 1258
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "navy"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "text-decoration": "underline",
              "color": "blue"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1277,
              "y": 213
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.001992833047899",
          "label": "first integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1264,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.256009914966201",
          "label": "second integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1092,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 157
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "8": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "10": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 805,
              "y": 64
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "4"
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "# groups=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "latentVisibility": true,
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 420
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 443
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1",
          "latentVisibility": true,
          "label": "-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 410
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2",
          "latentVisibility": true,
          "label": "-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-3",
          "latentVisibility": true,
          "label": "-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 458
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-4",
          "latentVisibility": true,
          "label": "-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 482
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "latentVisibility": true,
          "label": "-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "24": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 57,
              "y": 57
            }
          },
          "textMFS": "<T'Multiplying Two Integers  Investigation - First Factor Negative'>",
          "style": {
            "font-size": 20,
            "color": "black"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 303,
              "y": 182
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 260,
              "y": 193
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 370,
              "y": 222
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 362,
              "y": 220
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 338,
              "y": 234
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 333,
              "y": 237
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 674
            }
          },
          "textMFS": "<T'Adding or removing groups of zero will still give zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 714
            }
          },
          "textMFS": "<T'0 groups of 0 is zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 274,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 216,
              "y": 235
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 259,
              "y": 205
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 148,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "47": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 571,
              "y": 228
            }
          },
          "textMFS": "<VL<T'What happens when the first factor is negative? '><T'How does the model represent this? '><0><0><0><T'What happens when the second factor is positive?  '><T'How does the model represent this? '><0><0><0><T'What happens when the second factor is negative?  '><T'How does the model represent this? '>>",
          "style": {
            "text-decoration": "none",
            "color": "green"
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 159
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.159916989654225",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 182
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.3415326395458846",
          "label": "sign 2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "50": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "48",
            "3": "49"
          },
          "geom": {
            "loc": {
              "x": 384,
              "y": 102
            }
          },
          "label": "New Product",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Product"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 2.0999999046325684,
              "upperParamBound": 5.800000190734863,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 1.5,
              "upperParamBound": 8.499899864196777,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -2,
              "upperParamBound": -1,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -2,
              "upperParamBound": 1,
              "discrete": false
            }
          ]
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 205
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 222
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign 2>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign 2>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51",
            "1": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 273
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*trunc(@1)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 248
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 266
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "center": "43",
            "measure": "62"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "66": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "center": "25",
            "measure": "66"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 642
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "70": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "center": "27",
            "measure": "69"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "71"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 573
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 529
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 485
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "77"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 441
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "82": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "83": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "82"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 589
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "84"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 545
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "87"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "89": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "88"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "15"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "90"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "91"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 457
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "94": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "93"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<one)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "94"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 413
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 135
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 290
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*round(@1)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "101",
            "1": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "103": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "101",
            "1": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "104": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 275
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "105": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "106": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "99"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 694
            }
          },
          "textMFS": "<H<T'Adding 0 groups of '><?1xC0001<H<T'3'>>><T' will still give zero.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "107": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "108": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107",
            "1": "64"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 868
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[2]=0)^(\u00ac(m[1]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "109": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40",
            "center": "39",
            "measure": "109"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "111": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "110",
            "text": "37"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "112": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "113": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61",
            "1": "112"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(\u00ac(m[2]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "114": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "113"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "41",
            "measure": "114"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "116": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "115",
            "text": "106"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "117": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61",
            "1": "107"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 824
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "118": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "117"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "45",
            "measure": "118"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "120": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "119",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "121": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "122": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65",
            "1": "121"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 763
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "123": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "122"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "center": "31",
            "measure": "123"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68",
            "1": "121"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "33",
            "measure": "126"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "128": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 678
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "65",
            "1": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "130": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "129"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "131": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "center": "29",
            "measure": "130"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "68",
            "1": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "132"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "36",
            "center": "35",
            "measure": "133"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "135": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "96"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 711
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?1xC0001<H<T'\u20133'>>>><T'('><?1xC0002<H<T'3'>>><T') can be viewed as removing '><?1xC0003<H<T'3'>>><T' groups of '><?1xC0002<H<T'3'>>><T' from zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "136": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "67",
            "text": "135"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "137": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "96"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 645
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'\u20133'>>>><T'('><?1xC0002<H<T'3'>>><T') can be viewed as adding '><?1xC0003<H<T'3'>>><T' groups of '><?1xC0002<H<T'3'>>><T' to zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "138": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "63",
            "text": "137"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "139": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "70",
            "text": "137"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "140": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "56",
            "1": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "141": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "140"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 364
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "142": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56",
            "1": "99",
            "2": "140"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 506,
              "y": 98
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20133'>>><T'('><?1xC0002<H<T'3'>>><T') = '><?1xC0003<H<T'\u20139'>>>>>",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "143": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "144": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 689
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'3'>>>><T' groups of '><?1xC0002<H<T'3'>>><T' '><SR1G1L100<T'blue'>><T' counters were added giving a total of '><?1xC0003<H<T'9'>>><T' '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "145": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "127",
            "text": "144"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "146": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 667
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'3'>>>><T' groups of '><?1xC0002<H<T'3'>>><T' '><SR100G1L1<T'red'>><T' counters were added giving a total of '><?1xC0003<H<T'9'>>><T' '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "147": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "134",
            "text": "146"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "148": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 733
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?1xC0001<H<T'3'>>>><T' groups of '><?1xC0002<H<T'3'>>><T' '><SR100G1L1<T'red'>><T' counters were removed leaving '><?1xC0003<H<T'9'>>><T' more '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "149": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "131",
            "text": "148"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "150": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "143",
            "2": "141"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 755
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?1xC0001<H<T'3'>>>><T' groups of '><?1xC0002<H<T'3'>>><T' '><SR1G1L100<T'blue'>><T' counters were removed leaving '><?1xC0003<H<T'9'>>><T' more '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "151": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "124",
            "text": "150"
          },
          "constraint": "Pegged",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "152": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "153": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "56",
            "2": "99",
            "3": "4",
            "4": "5",
            "5": "96",
            "6": "143",
            "7": "97",
            "8": "152",
            "9": "6",
            "10": "7",
            "11": "8",
            "12": "9",
            "13": "59",
            "14": "57",
            "15": "11",
            "16": "60",
            "17": "58",
            "18": "12",
            "19": "100",
            "20": "101",
            "21": "105",
            "22": "104",
            "23": "13",
            "24": "14",
            "25": "15",
            "26": "16",
            "27": "17",
            "28": "18",
            "29": "19",
            "30": "20",
            "31": "21",
            "32": "22",
            "33": "23",
            "34": "93",
            "35": "90",
            "36": "87",
            "37": "84",
            "38": "81",
            "39": "94",
            "40": "91",
            "41": "88",
            "42": "85",
            "43": "82",
            "44": "95",
            "45": "92",
            "46": "89",
            "47": "86",
            "48": "83",
            "49": "79",
            "50": "77",
            "51": "75",
            "52": "73",
            "53": "71",
            "54": "80",
            "55": "78",
            "56": "76",
            "57": "74",
            "58": "72",
            "59": "103",
            "60": "102",
            "61": "140",
            "62": "135",
            "63": "141",
            "64": "148",
            "65": "150",
            "66": "137",
            "67": "146",
            "68": "144",
            "69": "68",
            "70": "65",
            "71": "128",
            "72": "121",
            "73": "132",
            "74": "125",
            "75": "129",
            "76": "122",
            "77": "61",
            "78": "107",
            "79": "64",
            "80": "112",
            "81": "37",
            "82": "106",
            "83": "38"
          },
          "geom": {
            "loc": {
              "x": 1447,
              "y": 65
            }
          },
          "label": "Show Objects",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "154": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "56"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 57,
              "y": 98
            }
          },
          "textMFS": "<H<T'first integer = '><?1xC0001<H<T'\u20133'>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none"
          }
        },
        "155": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "99"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 205,
              "y": 98
            }
          },
          "textMFS": "<H<T'second integer = '><?1xC0001<H<T'3'>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "156": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 573,
              "y": 290
            }
          },
          "textMFS": "<VL<H<T'groups of counters are '><SS2<T'removed'>><T' from zero, the size of the'>><T'integer is the number of groups'><0><0><0><T'positive counters are removed; the colour of the counters is red'><0><0><0><0><T'negative counters are removed; the colour of the counters is'><T'blue'><F111xxFFFFFFFFx20x802x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "text-decoration": "none",
            "color": "fuchsia"
          }
        },
        "157": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "156"
          },
          "geom": {
            "loc": {
              "x": 1007,
              "y": 238
            }
          },
          "label": "Show Solution",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Solution",
            "Show Solution"
          ]
        },
        "158": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 703,
              "y": 64
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "2"
        },
        "159": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "14",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 744,
              "y": -67
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "160": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "15",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 744,
              "y": -45
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 744,
              "y": -23
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "162": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 744,
              "y": -1
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "163": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "18",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 742,
              "y": 16
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 824,
              "y": -90
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "160",
            "1": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 824,
              "y": -66
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "166": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161",
            "1": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 824,
              "y": -42
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "167": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "162",
            "1": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 824,
              "y": -18
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "168": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "163",
            "1": "143"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 824,
              "y": 6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "169": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -22,
              "y": 258
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "170": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "169",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "169",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "172": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "170",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "173": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "171",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "174": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "172",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "175": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "173"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 45
          }
        },
        "176": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "174"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 46
          }
        },
        "177": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "175",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 55
          }
        },
        "178": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "176",
            "blue": "102",
            "green": "5",
            "red": "103"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 60
          }
        },
        "179": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "171",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "180": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "179",
            "center": "171"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "181": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "180",
            "center": "171"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "181",
            "p1": "180"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "182",
            "center": "171"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "184": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "183",
            "line1": "182"
          },
          "constraint": "Intersection",
          "label": "T",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "185": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "170",
            "1": "171",
            "2": "172",
            "3": "173",
            "4": "174",
            "5": "175",
            "6": "176",
            "7": "177",
            "8": "178",
            "9": "179",
            "10": "180",
            "11": "181",
            "12": "182",
            "13": "183",
            "14": "184",
            "preimage0": "169",
            "map0image0": "184",
            "depth": "164"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "186": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "173",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "187": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "174",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "188": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "177",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 65
          }
        },
        "189": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "178",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "190": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "182",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "191": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "183",
            "map": "185"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "192": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "170",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "192",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "194": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "193",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "195": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "194",
            "center": "193"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "196": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "195",
            "center": "193"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "196",
            "p1": "195"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "198": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "197",
            "center": "193"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "199": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "198",
            "line1": "197"
          },
          "constraint": "Intersection",
          "label": "U",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "200": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "193",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "201": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "200"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 47
          }
        },
        "202": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "201",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 56
          }
        },
        "203": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "192",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "204": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "203",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "205": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "204",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "206": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "205"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 48
          }
        },
        "207": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "206",
            "blue": "102",
            "green": "5",
            "red": "103"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 61
          }
        },
        "208": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "203",
            "1": "193",
            "2": "204",
            "3": "200",
            "4": "205",
            "5": "201",
            "6": "206",
            "7": "202",
            "8": "207",
            "9": "194",
            "10": "195",
            "11": "196",
            "12": "197",
            "13": "198",
            "14": "199",
            "preimage0": "192",
            "map0image0": "199",
            "depth": "165"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "209": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "197",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "210": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "207",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "211": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "202",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "212": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "205",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "213": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "200",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "214": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "198",
            "map": "208"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "215": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "203",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "216": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "215",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "217": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "216",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "218": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "217",
            "center": "216"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "218",
            "center": "216"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "220": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "218"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "220",
            "center": "216"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "221",
            "line1": "220"
          },
          "constraint": "Intersection",
          "label": "V",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "223": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "216",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "224": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "223"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "aqua",
            "layerOrder": 49
          }
        },
        "225": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "224",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 57
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "215",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "228": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "227",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "229": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "228"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 50
          }
        },
        "230": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "229",
            "blue": "102",
            "green": "5",
            "red": "103"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 62
          }
        },
        "231": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "226",
            "1": "216",
            "2": "227",
            "3": "223",
            "4": "228",
            "5": "224",
            "6": "229",
            "7": "225",
            "8": "230",
            "9": "217",
            "10": "218",
            "11": "219",
            "12": "220",
            "13": "221",
            "14": "222",
            "preimage0": "215",
            "map0image0": "222",
            "depth": "166"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "232": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "220",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "233": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "230",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "234": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "225",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "235": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "228",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "236": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "223",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "237": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "221",
            "map": "231"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "226",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "239": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "240": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "239",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "241": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "240",
            "center": "239"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "242": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "241",
            "center": "239"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "243": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "242",
            "p1": "241"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "244": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "243",
            "center": "239"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "244",
            "line1": "243"
          },
          "constraint": "Intersection",
          "label": "W",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "246": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "239",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "247": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "246"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "purple",
            "layerOrder": 51
          }
        },
        "248": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "247",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 58
          }
        },
        "249": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "250": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "249",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "251": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "250",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "252": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "251"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 52
          }
        },
        "253": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "252",
            "blue": "102",
            "green": "5",
            "red": "103"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 63
          }
        },
        "254": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "249",
            "1": "239",
            "2": "250",
            "3": "246",
            "4": "251",
            "5": "247",
            "6": "252",
            "7": "248",
            "8": "253",
            "9": "240",
            "10": "241",
            "11": "242",
            "12": "243",
            "13": "244",
            "14": "245",
            "preimage0": "238",
            "map0image0": "245",
            "depth": "167"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "255": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "243",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "256": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "253",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 72
          }
        },
        "257": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "248",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "258": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "251",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "259": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "246",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "260": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "244",
            "map": "254"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "261": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "249",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "262": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "261",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "263": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "262",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "264": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "263",
            "center": "262"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "265": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "264",
            "center": "262"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "266": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "265",
            "p1": "264"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "267": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "266",
            "center": "262"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "268": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "267",
            "line1": "266"
          },
          "constraint": "Intersection",
          "label": "X",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "269": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "262",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "270": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "269"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 53
          }
        },
        "271": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "270",
            "blue": "104",
            "green": "5",
            "red": "105"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 59
          }
        },
        "272": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "261",
            "distance": "7"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "273": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "272",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "274": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "273",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "275": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "274"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 54
          }
        },
        "276": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "275",
            "blue": "102",
            "green": "5",
            "red": "103"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 64
          }
        },
        "277": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "272",
            "1": "262",
            "2": "273",
            "3": "269",
            "4": "274",
            "5": "270",
            "6": "275",
            "7": "271",
            "8": "276",
            "9": "263",
            "10": "264",
            "11": "265",
            "12": "266",
            "13": "267",
            "14": "268",
            "preimage0": "261",
            "map0image0": "268",
            "depth": "168"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "266",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "279": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "276",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 74
          }
        },
        "280": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "271",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 73
          }
        },
        "281": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "274",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "282": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "269",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "283": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "267",
            "map": "277"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 68,
          "left": 30,
          "bottom": 818,
          "right": 1257
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "rgb(255,128,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 265,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "label": "rad tile",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "label": "1st int green",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 157
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "label": "vert spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "label": "spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "8": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 802,
              "y": 95
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "5"
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "groups of>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "groups of<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9",
            "1": "10"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9",
            "1": "10"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 275
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "label": "zero",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 420
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 443
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1",
          "label": "-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 410
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2",
          "label": "-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-3",
          "label": "-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 458
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-4",
          "label": "-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 482
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "label": "-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 323,
              "y": 210
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 288,
              "y": 216
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 330,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 380,
              "y": 249
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 365,
              "y": 254
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 335,
              "y": 252
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "37": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "36"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 674
            }
          },
          "textMFS": "<T'Adding or removing groups of zero will still give zero.'>",
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "39": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 714
            }
          },
          "textMFS": "<T'0 groups of 0 is zero.'>",
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 269,
              "y": 251
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 238,
              "y": 243
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 290,
              "y": 212
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 148,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "48": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 635,
              "y": 266
            }
          },
          "textMFS": "<VL<T'Input both positive and negative values between -5 and 5 for the'><T'first integer. Input both positive and negative values for the'><T'second integer.'><0><SR1G81L1<T'When is the product of two integers positive?'>><0><0><SR1G81L1<T'When is the product of two integers negative?'>><F110xxFFFFFFFFx20xC0x>>"
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.52592547379986",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 193
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.841059602649007",
          "label": "sign 2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 216
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign 2>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 250
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 267
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign 2>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51",
            "1": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 284
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 301
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "58": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "57"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 694
            }
          },
          "textMFS": "<H<T'Adding 0 groups of '><?1xC0001<H<T'\u20137'>>><T' will still give zero.'>>",
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 678
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "65": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 640,
              "y": 396
            }
          },
          "textMFS": "<VL<T'when both integers are positive or both integers are negative'><0><0><T'when one integer is positive and the other integer is negative'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "fuchsia"
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65"
          },
          "geom": {
            "loc": {
              "x": 798,
              "y": 320
            }
          },
          "label": "Show Solution",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Solution",
            "Show Solution"
          ]
        },
        "67": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 69,
              "y": 86
            }
          },
          "textMFS": "<T'Multiplying Two Integers Consolidation '>",
          "style": {
            "font-size": 20,
            "text-decoration": "underline"
          }
        },
        "68": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 706,
              "y": 95
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "3"
        },
        "69": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -15,
              "y": 275
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "70": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "69",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "71": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "69",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "70",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "73": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "71",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "74": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "72",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "75": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "73"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 45
          }
        },
        "76": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "74"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 50
          }
        },
        "77": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "75",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 55
          }
        },
        "78": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "76",
            "blue": "25",
            "green": "3",
            "red": "24"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 60
          }
        },
        "79": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "71",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "79",
            "center": "71"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "80",
            "center": "71"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "82": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "81",
            "p1": "80"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "82",
            "center": "71"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "84": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "70",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "84",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "87",
            "center": "85"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "88",
            "p1": "87"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "90": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "89",
            "center": "85"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "91": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "85",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "92": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "91"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 46
          }
        },
        "93": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "92",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 56
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "84",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "95",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "97": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "96"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 51
          }
        },
        "98": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "97",
            "blue": "25",
            "green": "3",
            "red": "24"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 61
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "100": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "99",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "101": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "100",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "101",
            "center": "100"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "102",
            "center": "100"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "104": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "102"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "104",
            "center": "100"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "106": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "100",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "107": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "106"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 47
          }
        },
        "108": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "107",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 57
          }
        },
        "109": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "99",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "111": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "110",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "111"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 52
          }
        },
        "113": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "112",
            "blue": "25",
            "green": "3",
            "red": "24"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 62
          }
        },
        "114": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "114",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "118": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "117",
            "center": "115"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "119": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "118",
            "p1": "117"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "119",
            "center": "115"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "121": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "115",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "122": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "121"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 48
          }
        },
        "123": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "122",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 58
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "114",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "126": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "125",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "127": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "126"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 53
          }
        },
        "128": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "127",
            "blue": "25",
            "green": "3",
            "red": "24"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 63
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "130": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "131": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "130",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "132": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "131",
            "center": "130"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "133": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "132",
            "center": "130"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "134": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "133",
            "p1": "132"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "135": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "134",
            "center": "130"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "136": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "130",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "137": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "136"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "navy",
            "layerOrder": 49
          }
        },
        "138": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "137",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 59
          }
        },
        "139": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "140": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "141": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "140",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "142": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "141"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 54
          }
        },
        "143": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "142",
            "blue": "25",
            "green": "3",
            "red": "24"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 64
          }
        },
        "144": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 317,
              "y": 70
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "145": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 252,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "label": "-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "146": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 404,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "step",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "147": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "144",
            "1": "145",
            "2": "146"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/trunc((@0-@1)/@2)",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 56,
              "y": 145
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "149": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "148"
          },
          "angle": 0,
          "distance": 200,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "148",
            "p1": "149"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "151": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "150"
          },
          "value": 0.1,
          "constraint": "PointOnPath",
          "label": "Y",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "149",
            "center": "148",
            "measure": "147"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "153": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "obj0": "148",
            "obj1": "152",
            "obj2": "151"
          },
          "constraint": "MeasurementRatio",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "154": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "153"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "155": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "154"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "156": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "154"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "157": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "center": "148",
            "measure": "155"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "158": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "center": "148",
            "measure": "156"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "159": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "157",
            "1": "151"
          },
          "geom": {
            "loc": {
              "x": 65,
              "y": 146
            }
          },
          "label": "+",
          "style": {
            "color": "black"
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "+"
          ],
          "rate": 0
        },
        "160": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "158",
            "1": "151"
          },
          "geom": {
            "loc": {
              "x": 65,
              "y": 124
            }
          },
          "label": "\u2013",
          "style": {
            "color": "black"
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "\u2013"
          ],
          "rate": 0
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "145",
            "1": "146",
            "2": "154"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 100,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1*@2",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "162": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "# groups=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "163": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0)",
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "166": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 364
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "167": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "168": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "18",
            "1": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": 14
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "169": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "170": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "171": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "15",
            "1": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -52
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "172": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "14",
            "1": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "173": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "167",
            "1": "63",
            "2": "166"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 755
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'4'>>><T' groups of '><?1xC0002<H<T'7'>>><T' '><SR1G1L100<T'blue'>><T' counters were removed leaving '><?1xC0003<H<T'28'>>><T' more '><SR100G1L1<T'red'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "174": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "167",
            "1": "63",
            "2": "166"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 733
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'4'>>><T' groups of '><?1xC0002<H<T'7'>>><T' '><SR100G1L1<T'red'>><T' counters were removed leaving '><?1xC0003<H<T'28'>>><T' more '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "175": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "167",
            "1": "63",
            "2": "166"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 667
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'4'>>><T' groups of '><?1xC0002<H<T'7'>>><T' '><SR100G1L1<T'red'>><T' counters were added giving a total of '><?1xC0003<H<T'28'>>><T' '><SR100G1L1<T'red'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "176": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "167",
            "1": "63",
            "2": "166"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 689
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'4'>>><T' groups of '><?1xC0002<H<T'7'>>><T' '><SR1G1L100<T'blue'>><T' counters were added giving a total of '><?1xC0003<H<T'28'>>><T' '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "177": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "164",
            "1": "57",
            "2": "167"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 645
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20134'>>><T'('><?1xC0002<H<T'\u20137'>>><T') can be viewed as adding '><?1xC0003<H<T'4'>>><T' groups of '><?1xC0002<H<T'\u20137'>>><T' to zero.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "178": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "164",
            "1": "57",
            "2": "167"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 711
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20134'>>><T'('><?1xC0002<H<T'\u20137'>>><T') can be viewed as removing '><?1xC0003<H<T'4'>>><T' groups of '><?1xC0002<H<T'\u20137'>>><T' from zero.'>>>",
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 135
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "180"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<one)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "182": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "181"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 413
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "183": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "15"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "184": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "183"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "185": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "184"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 457
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "186": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "187": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "186"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "188": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "187"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "189": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "190": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "189"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "191": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "190"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 545
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "192": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "193": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "192"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "193"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 589
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "195": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "196": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "197": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "197"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 441
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "199": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "200": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "199"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 485
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "201": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "202": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "201"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 529
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "203": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "204": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "203"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 573
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "205": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 642
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "206": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "205",
            "1": "62"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer>0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "207": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "206"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "208": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "37",
            "center": "36",
            "measure": "207"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "209": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "208",
            "text": "175"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16
          }
        },
        "210": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "205",
            "1": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer>0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "211": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "210"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "212": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35",
            "center": "34",
            "measure": "211"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "213": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "212",
            "text": "176"
          },
          "constraint": "Pegged"
        },
        "214": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "205"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "215": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29",
            "center": "28",
            "measure": "214"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "216": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "215",
            "text": "177"
          },
          "constraint": "Pegged"
        },
        "217": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "218": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217",
            "1": "62"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer<0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "219": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "218"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "220": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "center": "30",
            "measure": "219"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "221": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "220",
            "text": "174"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16
          }
        },
        "222": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217",
            "1": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 763
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer<0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "223": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "222"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "224": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33",
            "center": "32",
            "measure": "223"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "225": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "224",
            "text": "173"
          },
          "constraint": "Pegged"
        },
        "226": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27",
            "center": "26",
            "measure": "226"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "228": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "227",
            "text": "178"
          },
          "constraint": "Pegged"
        },
        "229": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "230": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "229",
            "1": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 824
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "231": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "230"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "232": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "47",
            "center": "46",
            "measure": "231"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "233": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "232",
            "text": "39"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16
          }
        },
        "234": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "229",
            "1": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(\u00ac(m[2]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "234"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43",
            "center": "42",
            "measure": "235"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "237": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "236",
            "text": "58"
          },
          "constraint": "Pegged"
        },
        "238": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "229"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "239": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "59",
            "1": "238"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 868
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[2]=0)^(\u00ac(m[1]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "240": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "241": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41",
            "center": "40",
            "measure": "240"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "242": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "241",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16
          }
        },
        "243": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "229"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "244": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45",
            "center": "44",
            "measure": "243"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "245": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "244",
            "text": "177"
          },
          "constraint": "Pegged"
        },
        "246": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "161",
            "1": "1",
            "2": "165"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 433,
              "y": 129
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20134'>>><T'('><?1xC0002<H<T'\u20137'>>><T') = '><?1xC0003<H<T'28'>>>>>"
        },
        "247": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 248
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "# groups<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "248": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "168",
            "1": "63",
            "2": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 704,
              "y": 21
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "249": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "139",
            "1": "130",
            "2": "140",
            "3": "136",
            "4": "141",
            "5": "137",
            "6": "142",
            "7": "138",
            "8": "143",
            "9": "131",
            "10": "132",
            "11": "133",
            "12": "134",
            "13": "135",
            "preimage0": "129",
            "map0image0": "130",
            "depth": "248"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "250": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "139",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "251": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "135",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "252": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "136",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "253": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "141",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "254": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "138",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 73
          }
        },
        "255": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "143",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 74
          }
        },
        "256": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "134",
            "map": "249"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "257": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "169",
            "1": "63",
            "2": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 704,
              "y": -3
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "258": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "124",
            "1": "115",
            "2": "125",
            "3": "121",
            "4": "126",
            "5": "122",
            "6": "127",
            "7": "123",
            "8": "128",
            "9": "116",
            "10": "117",
            "11": "118",
            "12": "119",
            "13": "120",
            "preimage0": "114",
            "map0image0": "115",
            "depth": "257"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "259": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "124",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "260": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "120",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "261": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "121",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "262": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "126",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "263": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "123",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "264": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "128",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 72
          }
        },
        "265": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "119",
            "map": "258"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "266": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "170",
            "1": "63",
            "2": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -27
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "267": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "109",
            "1": "100",
            "2": "110",
            "3": "106",
            "4": "111",
            "5": "107",
            "6": "112",
            "7": "108",
            "8": "113",
            "9": "101",
            "10": "102",
            "11": "103",
            "12": "104",
            "13": "105",
            "preimage0": "99",
            "map0image0": "100",
            "depth": "266"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "268": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "109",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "269": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "105",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "270": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "106",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "271": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "111",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "272": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "108",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "273": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "113",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "274": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "104",
            "map": "267"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "275": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "171",
            "1": "63",
            "2": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -51
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "276": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "94",
            "1": "85",
            "2": "95",
            "3": "91",
            "4": "96",
            "5": "92",
            "6": "97",
            "7": "93",
            "8": "98",
            "9": "86",
            "10": "87",
            "11": "88",
            "12": "89",
            "13": "90",
            "preimage0": "84",
            "map0image0": "85",
            "depth": "275"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "277": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "94",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "90",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "279": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "91",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "280": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "96",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "281": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "93",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "282": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "98",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "283": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "89",
            "map": "276"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "284": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "172",
            "1": "63",
            "2": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -75
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "285": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "70",
            "1": "71",
            "2": "72",
            "3": "73",
            "4": "74",
            "5": "75",
            "6": "76",
            "7": "77",
            "8": "78",
            "9": "79",
            "10": "80",
            "11": "81",
            "12": "82",
            "13": "83",
            "preimage0": "69",
            "map0image0": "71",
            "depth": "284"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "286": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "287": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "82",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "288": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "78",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "289": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "77",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 65
          }
        },
        "290": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "74",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "291": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "73",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "292": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "70",
            "map": "285"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "293": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "247"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 266
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "294": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "161"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "# groups>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "295": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "296": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "172",
            "1": "63",
            "2": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "297": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "171",
            "1": "63",
            "2": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -52
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "298": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "170",
            "1": "63",
            "2": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -28
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "299": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "169",
            "1": "63",
            "2": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -4
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "300": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "168",
            "1": "63",
            "2": "294"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": 20
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "301": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -18,
              "y": 280
            }
          },
          "label": "Z",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "302": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "301",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "303": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "302",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "304": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "303"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 75
          }
        },
        "305": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "304",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 80
          }
        },
        "306": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "302",
            "1": "303",
            "2": "304",
            "3": "305",
            "preimage0": "301",
            "map0image0": "302",
            "depth": "296"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "307": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "303",
            "map": "306"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "308": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "305",
            "map": "306"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 85
          }
        },
        "309": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "301",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "310": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "309",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "311": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "310",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "312": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "311"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 76
          }
        },
        "313": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "312",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 81
          }
        },
        "314": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "310",
            "1": "311",
            "2": "312",
            "3": "313",
            "preimage0": "309",
            "map0image0": "310",
            "depth": "297"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "315": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "313",
            "map": "314"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 86
          }
        },
        "316": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "311",
            "map": "314"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "317": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "309",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "318": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "317",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "319": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "318",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "320": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "319"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 77
          }
        },
        "321": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "320",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 82
          }
        },
        "322": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "318",
            "1": "319",
            "2": "320",
            "3": "321",
            "preimage0": "317",
            "map0image0": "318",
            "depth": "298"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "323": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "321",
            "map": "322"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 87
          }
        },
        "324": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "319",
            "map": "322"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "325": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "317",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "326": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "325",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "327": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "326",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "328": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "327"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 78
          }
        },
        "329": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "328",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 83
          }
        },
        "330": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "326",
            "1": "327",
            "2": "328",
            "3": "329",
            "preimage0": "325",
            "map0image0": "326",
            "depth": "299"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "331": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "329",
            "map": "330"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 88
          }
        },
        "332": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "327",
            "map": "330"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "333": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "325",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "334": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "333",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "335": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "334",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "336": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "335"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 79
          }
        },
        "337": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "336",
            "blue": "12",
            "green": "3",
            "red": "11"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 84
          }
        },
        "338": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "334",
            "1": "335",
            "2": "336",
            "3": "337",
            "preimage0": "333",
            "map0image0": "334",
            "depth": "300"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "339": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "337",
            "map": "338"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 89
          }
        },
        "340": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "335",
            "map": "338"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        }
      }
    },
    {
      "metadata": {
        "title": "5",
        "id": "5",
        "sketchRect": {
          "top": -8,
          "left": 205,
          "bottom": 742,
          "right": 1432
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "fuchsia"
          },
          "Straights": {
            "color": "fuchsia"
          },
          "Curves": {
            "color": "rgb(0,121,0)"
          },
          "Interior": {
            "color": "rgb(255,128,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "CoordSys": {
            "color": "rgb(179,179,179)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 452,
              "y": 241
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "2": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "1"
          },
          "value": 28.346456692913385,
          "constraint": "HorizontalUnitPoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "3": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "1",
            "unitPoint": "2"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "label": {
              "showLabel": false
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "2"
          },
          "constraint": "UnitPointInternalSquare",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "5": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "1",
            "unitPoint": "4"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "label": {
              "showLabel": false
            }
          }
        },
        "6": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "3",
            "axisY": "5"
          },
          "constraint": "CoordSys",
          "shape": "square",
          "style": {
            "grid": "gridlines"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 9.17222222222223,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -8,
              "labelOffsetY": -30,
              "font-size": 18,
              "color": "red"
            },
            "radius": 2
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 82
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.5 cm",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "8"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 108
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6000000000000001 cm",
          "latentVisibility": true,
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "10"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "11",
            "distance": "10"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "center": "11"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "14"
          },
          "constraint": "Midpoint",
          "label": "B",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "11"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "16"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "9",
            "p0": "11",
            "p1": "15"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "18",
            "center": "9"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "20": {
          "kind": "Polygon",
          "genus": "Polygon",
          "parents": {
            "0": "19",
            "1": "17",
            "2": "12",
            "3": "7",
            "4": "13",
            "5": "15",
            "6": "18"
          },
          "constraint": "PolygonFromPoints",
          "label": "Drag",
          "style": {
            "layerOrder": 0,
            "label": {
              "showLabel": true,
              "labelOffsetX": -2,
              "labelOffsetY": 0,
              "labelParam": 0.872260419102717
            }
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "15",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "7"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "7",
            "p1": "12"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "17"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "27": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "17",
            "p1": "19"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 56
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.5 cm",
          "latentVisibility": true,
          "label": "t[3]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "29": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6000000000000001 cm",
          "latentVisibility": true,
          "label": "t[4]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 5.750277777777782,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "28"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "29"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "distance": "29"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33",
            "center": "32"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "35"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "32"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "38": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "37"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "p0": "32",
            "p1": "36"
          },
          "constraint": "TranslateVector",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39",
            "center": "31"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "41": {
          "kind": "Polygon",
          "genus": "Polygon",
          "parents": {
            "0": "40",
            "1": "38",
            "2": "33",
            "3": "30",
            "4": "34",
            "5": "36",
            "6": "39"
          },
          "constraint": "PolygonFromPoints",
          "label": "P[2]",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 0
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "39"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "39",
            "p1": "36"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "44": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "36",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "45": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "30",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "48": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "40"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "49": {
          "kind": "Polygon",
          "genus": "Polygon",
          "parents": {
            "source": "41",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Drag",
          "style": {
            "layerOrder": 1,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": 0,
              "labelParam": 0.9811938950345632
            }
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "42",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "43",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "44",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "45",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "54": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "46",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "47",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "56": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "48",
            "center": "30"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black",
            "width": 1
          }
        },
        "57": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 537,
              "y": 257
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "58": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 665.4251968503936,
              "y": 255.30708661417327
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "59": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 552.0393700787401,
              "y": 226.9606299212599
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "60": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 608.7322834645668,
              "y": 255.30708661417327
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "radius": 2
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "54",
            "line1": "46"
          },
          "constraint": "Intersection",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -24,
              "labelOffsetY": -13,
              "font-size": 18,
              "color": "red"
            },
            "radius": 2
          }
        },
        "62": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "7",
            "coordSys": "6"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 134
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "61",
            "coordSys": "6"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 157
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "62"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 180
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "66": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 226
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "64",
            "coordY": "66",
            "coordSys": "6"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "radius": 2
          }
        },
        "68": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "66",
            "coordY": "65",
            "coordSys": "6"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "color": "green",
            "radius": 2
          }
        },
        "69": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "68",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "color": "green"
          }
        },
        "70": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "67"
          },
          "constraint": "Segment"
        },
        "71": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "67",
            "line": "69"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "72": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "68",
            "line": "71"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "73": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "72",
            "line1": "71"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "74": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "73",
            "1": "67",
            "2": "1",
            "3": "68"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 2
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "64",
            "1": "65"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1349,
              "y": 250
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1179,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1179,
              "y": 52
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "77"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1179,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1179,
              "y": 96
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "77"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1179,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "74",
            "blue": "80",
            "green": "79",
            "red": "78"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 3
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "64",
            "1": "65",
            "2": "75"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 30
            }
          },
          "textMFS": "<VL<H<SR100G1L100<H<?1xC0001<H<T'9'>>><SR1G1L1<T'('>>>><SR1G81L1<?1xC0002<H<T'5'>>>><T') = '><SR1G1L100<?1xC0003<H<T'45'>>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "64",
            "1": "65",
            "2": "75"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 61
            }
          },
          "textMFS": "<VL<H<SR100G1L100<H<?1xC0001<H<T'9'>>><SR1G1L1<T'('>>>><SR1G81L1<?1xC0002<H<T'5'>>>><T') = '><SR100G1L1<?1xC0003<H<T'45'>>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 123
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[1]<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "75"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 169
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "87": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "64",
            "1": "65",
            "2": "75"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1065,
              "y": 92
            }
          },
          "textMFS": "<VL<H<SR100G1L100<?1xC0001<H<T'9'>>>><T'('><SR1G81L1<?1xC0002<H<T'5'>>>><T') = '><?1xC0003<H<T'45'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 309.61417322834654,
              "y": 61.22834645669309
            }
          },
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "89"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "center": "89",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "91",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 24
          }
        },
        "93": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "84"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "center": "89",
            "measure": "93"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "95": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "94",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 24
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "86"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "center": "89",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "98": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "97",
            "text": "87"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 24
          }
        },
        "99": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 482,
              "y": 300
            }
          },
          "textMFS": "<VL<T'What does the pink line segment represent?'><0><T'What does the green line segment represent?'><0><T'How is the product represented by the model?'><0><T'Why does the model change colour?'><0><T'Why is the area red in quadrants 1 and 3?'><0><T'Why is the area blue in quadrants 2 and 4?'><0><0>>"
        },
        "100": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "8",
            "1": "10",
            "2": "28",
            "3": "29",
            "4": "62",
            "5": "63",
            "6": "64",
            "7": "65",
            "8": "66",
            "9": "75",
            "10": "76",
            "11": "77",
            "12": "78",
            "13": "79",
            "14": "80",
            "15": "82",
            "16": "83",
            "17": "84",
            "18": "85",
            "19": "86",
            "20": "87"
          },
          "geom": {
            "loc": {
              "x": 1434,
              "y": 7
            }
          },
          "label": "Show Text Objects",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Text Objects",
            "Show Text Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "101": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 967,
              "y": 18
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "6"
        },
        "102": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 484,
              "y": 325
            }
          },
          "textMFS": "<VL<T'The first integer factor.'><0><T'The second integer factor.'><0><T'The area of the rectangle.'><0><T'To represent both positive and negative areas.'><0><T'The integers have the same sign in these quadrants so the product is positive.'><0><T'The integers have different signs in these quadrants so the product is negative.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "fuchsia"
          }
        },
        "103": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "102"
          },
          "geom": {
            "loc": {
              "x": 885,
              "y": 305
            }
          },
          "label": "Show Solution",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Solution",
            "Show Solution"
          ]
        },
        "104": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 482,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Multiplying Two Integers Consolidation '>>",
          "style": {
            "text-decoration": "underline"
          }
        },
        "105": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 869,
              "y": 18
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "4"
        }
      }
    },
    {
      "metadata": {
        "title": "6",
        "id": "6",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 750,
          "right": 1227
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "rgb(0,121,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "normal",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16,
              "color": "blue"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 49
            }
          },
          "textMFS": "<VL<T'When is \u2026'><T'  '><T' the product of two integers greater than either integer.'><T''><T''><T''><0><T'the product of two integers less than either integer.'><T''><T''><0><T''><T' the product of two integers between both integers.'>>"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 7
            }
          },
          "textMFS": "<T'Multiplying Two Integers Consolidation '>",
          "style": {
            "font-size": 20,
            "text-decoration": "underline"
          }
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 18,
              "y": 129
            }
          },
          "textMFS": "<VL<T'when both integers have the same sign - excluding the special'><T'cases, 0 and 1 in which case the product is equal to one of the'><T'integers'><0><0><T'when the integers have different signs - excluding the special'><T'cases 0 and 1'><0><0><0><T'since the magnitude of the product will be greater than either'><T'integer it will not be possible for the product to be between'><T'both integers; even considering the special cases 0 and 1 the'><T'product is still not between the integers'><F112xxFFFFFFFFx20xC438x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "fuchsia"
          }
        },
        "4": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3"
          },
          "geom": {
            "loc": {
              "x": 533,
              "y": 103
            }
          },
          "label": "Show Solution",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Solution",
            "Show Solution"
          ]
        },
        "5": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 763,
              "y": 19
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "7"
        },
        "6": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 664,
              "y": 19
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "5"
        }
      }
    },
    {
      "metadata": {
        "title": "7",
        "id": "7",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 750,
          "right": 1227
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "rgb(0,121,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "normal",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16,
              "color": "blue"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 346
            }
          },
          "textMFS": "<T'If the product is negative then one of the integers is negative.'>",
          "style": {
            "font-size": 18
          }
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 231
            }
          },
          "textMFS": "<T'If the product is positive then one of the integers is positive.'>",
          "style": {
            "font-size": 18
          }
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 116
            }
          },
          "textMFS": "<T'If both integers have the same sign their product could be negative.'>",
          "style": {
            "font-size": 18
          }
        },
        "4": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 45
            }
          },
          "textMFS": "<VL<T'Determine if the following statements are always true, sometimes true or never true. '><T'Explain fully using one of the models as an example.'>>",
          "style": {
            "font-size": 18
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 7
            }
          },
          "textMFS": "<T'Multiplying Two Integers Consolidation '>",
          "style": {
            "text-decoration": "underline"
          }
        },
        "6": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 761,
              "y": 15
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "8"
        },
        "7": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 664,
              "y": 15
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "6"
        }
      }
    },
    {
      "metadata": {
        "title": "8",
        "id": "8",
        "sketchRect": {
          "top": 52,
          "left": 52,
          "bottom": 802,
          "right": 1279
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "green"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1277,
              "y": 213
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.224247135663304",
          "label": "first integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1264,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.328201370345199",
          "label": "second integer",
          "style": {
            "hidden": true,
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 157
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "vert spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "8": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "# groups=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "7",
            "1": "10"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -75,
              "y": 152
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "latentVisibility": true,
          "label": "one",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 420
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "latentVisibility": true,
          "label": "two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 443
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "latentVisibility": true,
          "label": "three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1",
          "latentVisibility": true,
          "label": "-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 410
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2",
          "latentVisibility": true,
          "label": "-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-3",
          "latentVisibility": true,
          "label": "-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 458
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-4",
          "latentVisibility": true,
          "label": "-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 482
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "latentVisibility": true,
          "label": "-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "24": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 62,
              "y": 57
            }
          },
          "textMFS": "<T'Multiplying Two Integers - Practice'>",
          "style": {
            "font-size": 20,
            "color": "black"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 284,
              "y": 171
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 260,
              "y": 193
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 344,
              "y": 214
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 337,
              "y": 203
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 338,
              "y": 234
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 333,
              "y": 237
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 674
            }
          },
          "textMFS": "<T'Adding or removing groups of zero will still give zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 714
            }
          },
          "textMFS": "<T'0 groups of 0 is zero.'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 274,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 216,
              "y": 235
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 259,
              "y": 205
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 148,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 159
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.152653584398938",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 182
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.9657887508774072",
          "label": "sign 2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "49": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "47",
            "3": "48"
          },
          "geom": {
            "loc": {
              "x": 807,
              "y": 169
            }
          },
          "label": "New Product",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Product"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 1.5,
              "upperParamBound": 5.499899864196777,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": 1.5,
              "upperParamBound": 8.499899864196777,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -2,
              "upperParamBound": 1,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -2,
              "upperParamBound": 1,
              "discrete": false
            }
          ]
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 205
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 222
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign 2>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign 2>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50",
            "1": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 273
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "54",
            "1": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*round(@1)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 248
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "56"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 266
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "# groups>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "center": "43",
            "measure": "61"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "64"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "center": "25",
            "measure": "65"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "67": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 642
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "67"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "center": "27",
            "measure": "68"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "70"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 573
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 529
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "75": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "74"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 485
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "76"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 441
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<=-one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "distance": "79"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "80",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "83": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "82",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "84": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "83"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 15
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "86": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "85",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "87": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "86"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "lime",
            "layerOrder": 25
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "89",
            "center": "82"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "center": "82"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "92": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "91",
            "p1": "90"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "93": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "92",
            "center": "82"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "94": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "93",
            "center": "82"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "80",
            "distance": "77"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "96",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "98": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "97",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "99": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "98"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 16
          }
        },
        "100": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "101": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "100",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "102": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "101"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 26
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "center": "97"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "106": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "105",
            "center": "97"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "107": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "105",
            "p1": "106"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "108": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "107",
            "center": "97"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "109": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "75"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "111",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "113": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "112"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 17
          }
        },
        "114": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "115": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "114",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "116": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "115"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 27
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "118": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "118",
            "center": "111"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "center": "111"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "120",
            "p1": "119"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "121",
            "center": "111"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "123": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "73"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "126": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "125",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "127": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "126"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 18
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "128",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "130": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "129"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 28
          }
        },
        "131": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "132": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "133": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "132",
            "center": "125"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "133",
            "center": "125"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "135": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "134",
            "p1": "133"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "136": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "135",
            "center": "125"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123",
            "distance": "71"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "137",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "139": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "138",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "140": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "139",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "141": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "140"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "aqua",
            "layerOrder": 19
          }
        },
        "142": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "distance": "6"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "143": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "142",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "144": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "143"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 29
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "center": "139"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "center": "139"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "148",
            "p1": "147"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "149",
            "center": "139"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "151": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "152": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "151"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "153": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "152"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 589
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "154": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "155": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "154"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "156": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "155"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 545
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "157": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "158": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "157"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "159": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "158"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "160": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "15"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "160"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "162": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "161"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 457
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "163": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "latentVisibility": true,
          "label": "m[1]<one",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "163"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[1]<one)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6",
            "1": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 413
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "166": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "distance": "165"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "167": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "166",
            "distance": "165"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "167",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "169": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "168",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "170": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "169"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 0
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "166",
            "distance": "162"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "172": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "171",
            "distance": "162"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "173": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "172",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "174": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "173",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "175": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "174"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 1
          }
        },
        "176": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "171",
            "distance": "159"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "177": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "176",
            "distance": "159"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "178": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "177",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "179": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "178",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "180": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "179"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 2
          }
        },
        "181": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "176",
            "distance": "156"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "182": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "181",
            "distance": "156"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "183": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "182",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "184": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "183",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "185": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "184"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 3
          }
        },
        "186": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "181",
            "distance": "153"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "187": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "186",
            "distance": "153"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "188": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "187",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "189": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "188",
            "radius": "4"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "190": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "189"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 4
          }
        },
        "191": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "192": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "191"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 135
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "193": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51",
            "1": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1563,
              "y": 290
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "193",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*round(@1)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "195": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "196": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "groups of<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "197": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "196",
            "1": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "196",
            "1": "195"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "199": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "144",
            "blue": "197",
            "green": "5",
            "red": "198"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 34
          }
        },
        "200": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "130",
            "blue": "197",
            "green": "5",
            "red": "198"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 33
          }
        },
        "201": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "116",
            "blue": "197",
            "green": "5",
            "red": "198"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 32
          }
        },
        "202": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "102",
            "blue": "197",
            "green": "5",
            "red": "198"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 31
          }
        },
        "203": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "87",
            "blue": "197",
            "green": "5",
            "red": "198"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 30
          }
        },
        "204": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "195",
            "1": "196"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 275
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "205": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "195",
            "1": "196"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "206": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "190",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 9
          }
        },
        "207": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "185",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 8
          }
        },
        "208": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "180",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 7
          }
        },
        "209": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "175",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 6
          }
        },
        "210": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "170",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 5
          }
        },
        "211": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "141",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 24
          }
        },
        "212": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "127",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 23
          }
        },
        "213": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "113",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 22
          }
        },
        "214": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "99",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 21
          }
        },
        "215": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "84",
            "blue": "204",
            "green": "5",
            "red": "205"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 20
          }
        },
        "216": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "194"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 694
            }
          },
          "textMFS": "<H<T'Adding 0 groups of '><?1xC0001<H<T'\u20134'>>><T' will still give zero.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "217": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "218": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217",
            "1": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 868
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[2]=0)^(\u00ac(m[1]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "219": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "218"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "220": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40",
            "center": "39",
            "measure": "219"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "221": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "220",
            "text": "37"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "222": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "\u00ac(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "223": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "60",
            "1": "222"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(\u00ac(m[2]=0))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "224": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "223"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "41",
            "measure": "224"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "226": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "225",
            "text": "216"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "227": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "60",
            "1": "217"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 824
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(m[2]=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "228": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "227"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "45",
            "measure": "228"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "230": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "229",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "231": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "232": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "64",
            "1": "231"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 763
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "233": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "232"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "center": "31",
            "measure": "233"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "67",
            "1": "231"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer<0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "236": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "33",
            "measure": "236"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "238": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 678
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "239": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "64",
            "1": "238"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer<0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "240": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "241": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "center": "29",
            "measure": "240"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "242": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "67",
            "1": "238"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(first integer>0)^(second integer>0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "243": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "244": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "36",
            "center": "35",
            "measure": "243"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "245": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "55",
            "1": "194",
            "2": "191"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 711
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?xC0001>><T'('><?xC0002><T') can be viewed as removing '><?xC0003><T' groups of '><?xC0002><T' from zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "246": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "55",
            "1": "194",
            "2": "191"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 645
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?1xC0001<H<T'\u20132'>>>><T'('><?1xC0002<H<T'\u20134'>>><T') can be viewed as adding '><?1xC0003<H<T'2'>>><T' groups of '><?1xC0002<H<T'\u20134'>>><T' to zero.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "247": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "62",
            "text": "246"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "248": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "249": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "248"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 364
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "250": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "55",
            "1": "194"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 384,
              "y": 97
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20132'>>><T'('><?1xC0002<H<T'\u20134'>>><T')'>>>",
          "style": {
            "text-decoration": "none",
            "color": "black"
          }
        },
        "251": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "252": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "191",
            "1": "251",
            "2": "249"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 689
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?xC0001>><T' groups of '><?xC0002><T' '><SR1G1L100<T'blue'>><T' counters were added giving a total of '><?xC0003><T' '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "253": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "191",
            "1": "251",
            "2": "249"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 667
            }
          },
          "textMFS": "<VL<H<SR100G1L1<?xC0001>><T' groups of '><?xC0002><T' '><SR100G1L1<T'red'>><T' counters were added giving a total of '><?xC0003><T' '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "254": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "191",
            "1": "251",
            "2": "249"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 733
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?xC0001>><T' groups of '><?xC0002><T' '><SR100G1L1<T'red'>><T' counters were removed leaving '><?xC0003><T' more '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "255": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "191",
            "1": "251",
            "2": "249"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 755
            }
          },
          "textMFS": "<VL<H<SR1G1L100<?xC0001>><T' groups of '><?xC0002><T' '><SR1G1L100<T'blue'>><T' counters were removed leaving '><?xC0003><T' more '><SR100G1L1<T'red'>><T' counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "256": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "251"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "257": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "55",
            "2": "194",
            "3": "4",
            "4": "5",
            "5": "191",
            "6": "251",
            "7": "192",
            "8": "256",
            "9": "6",
            "10": "7",
            "11": "8",
            "12": "9",
            "13": "58",
            "14": "56",
            "15": "10",
            "16": "59",
            "17": "57",
            "18": "11",
            "19": "195",
            "20": "196",
            "21": "205",
            "22": "204",
            "23": "13",
            "24": "14",
            "25": "15",
            "26": "16",
            "27": "17",
            "28": "18",
            "29": "19",
            "30": "20",
            "31": "21",
            "32": "22",
            "33": "23",
            "34": "163",
            "35": "160",
            "36": "157",
            "37": "154",
            "38": "151",
            "39": "164",
            "40": "161",
            "41": "158",
            "42": "155",
            "43": "152",
            "44": "165",
            "45": "162",
            "46": "159",
            "47": "156",
            "48": "153",
            "49": "78",
            "50": "76",
            "51": "74",
            "52": "72",
            "53": "70",
            "54": "79",
            "55": "77",
            "56": "75",
            "57": "73",
            "58": "71",
            "59": "198",
            "60": "197",
            "61": "248",
            "62": "245",
            "63": "249",
            "64": "254",
            "65": "255",
            "66": "246",
            "67": "253",
            "68": "252",
            "69": "67",
            "70": "64",
            "71": "238",
            "72": "231",
            "73": "242",
            "74": "235",
            "75": "239",
            "76": "232",
            "77": "60",
            "78": "217",
            "79": "63",
            "80": "222",
            "81": "37",
            "82": "216",
            "83": "38"
          },
          "geom": {
            "loc": {
              "x": 1447,
              "y": 65
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "258": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "146",
            "1": "132",
            "2": "118",
            "3": "104",
            "4": "105",
            "5": "119",
            "6": "106",
            "7": "107",
            "8": "108",
            "9": "133",
            "10": "147",
            "11": "120",
            "12": "121",
            "13": "122",
            "14": "134",
            "15": "135",
            "16": "136",
            "17": "148",
            "18": "149",
            "19": "150",
            "20": "145",
            "21": "131",
            "22": "117",
            "23": "103",
            "preimage0": "97",
            "preimage1": "111",
            "preimage2": "125",
            "preimage3": "139",
            "map0image0": "103",
            "map0image1": "117",
            "map0image2": "131",
            "map0image3": "145",
            "depth": "256"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "259": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "150",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "260": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "149",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "261": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "136",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "262": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "135",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "263": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "122",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "264": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "121",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "265": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "108",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "266": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "107",
            "map": "258"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "267": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "89",
            "1": "90",
            "2": "91",
            "3": "92",
            "4": "93",
            "5": "94",
            "6": "88",
            "preimage0": "82",
            "map0image0": "88",
            "depth": "256"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "268": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "94",
            "map": "267"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "269": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "93",
            "map": "267"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "270": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "92",
            "map": "267"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "271": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "82",
            "1": "97",
            "2": "111",
            "3": "125",
            "4": "139",
            "5": "83",
            "6": "98",
            "7": "112",
            "8": "126",
            "9": "140",
            "10": "84",
            "11": "99",
            "12": "113",
            "13": "127",
            "14": "141",
            "15": "215",
            "16": "214",
            "17": "213",
            "18": "212",
            "19": "211",
            "20": "85",
            "21": "100",
            "22": "114",
            "23": "128",
            "24": "142",
            "25": "86",
            "26": "101",
            "27": "115",
            "28": "129",
            "29": "143",
            "30": "87",
            "31": "102",
            "32": "116",
            "33": "130",
            "34": "144",
            "35": "203",
            "36": "202",
            "37": "201",
            "38": "200",
            "39": "199",
            "preimage0": "81",
            "preimage1": "96",
            "preimage2": "110",
            "preimage3": "124",
            "preimage4": "138",
            "map0image0": "82",
            "map0image1": "97",
            "map0image2": "111",
            "map0image3": "125",
            "map0image4": "139",
            "depth": "256"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "272": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "203",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 40
          }
        },
        "273": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "129",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "274": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "101",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "275": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "199",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 44
          }
        },
        "276": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "201",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 42
          }
        },
        "277": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "211",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 39
          }
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "212",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 38
          }
        },
        "279": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "213",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 37
          }
        },
        "280": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "214",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 36
          }
        },
        "281": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "215",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 35
          }
        },
        "282": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "140",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "283": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "126",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "284": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "112",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "285": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "98",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "286": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "287": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "143",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "288": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "115",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "289": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "86",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3
          }
        },
        "290": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "200",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 43
          }
        },
        "291": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "202",
            "map": "271"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 41
          }
        },
        "292": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "168",
            "1": "173",
            "2": "178",
            "3": "183",
            "4": "188",
            "5": "169",
            "6": "174",
            "7": "179",
            "8": "184",
            "9": "189",
            "10": "170",
            "11": "175",
            "12": "180",
            "13": "185",
            "14": "190",
            "15": "210",
            "16": "209",
            "17": "208",
            "18": "207",
            "19": "206",
            "preimage0": "167",
            "preimage1": "172",
            "preimage2": "177",
            "preimage3": "182",
            "preimage4": "187",
            "map0image0": "168",
            "map0image1": "173",
            "map0image2": "178",
            "map0image3": "183",
            "map0image4": "188",
            "depth": "256"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "293": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "189",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "294": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "184",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "295": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "179",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "296": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "174",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "297": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "169",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "298": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "208",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "299": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "209",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 11
          }
        },
        "300": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "206",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 14
          }
        },
        "301": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "207",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "302": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "210",
            "map": "292"
          },
          "constraint": "IterateImage",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 10
          }
        },
        "303": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "55"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 57,
              "y": 98
            }
          },
          "textMFS": "<H<T'first integer = '><?1xC0001<H<T'\u20132'>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "blue"
          }
        },
        "304": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "194"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 205,
              "y": 98
            }
          },
          "textMFS": "<H<T'second integer = '><?1xC0001<H<T'\u20134'>>>>",
          "style": {
            "font-size": 16,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "305": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "259",
            "1": "260",
            "2": "261",
            "3": "262",
            "4": "263",
            "5": "264",
            "6": "265",
            "7": "266",
            "8": "268",
            "9": "269",
            "10": "270",
            "11": "272",
            "12": "273",
            "13": "274",
            "14": "275",
            "15": "276",
            "16": "277",
            "17": "278",
            "18": "279",
            "19": "280",
            "20": "281",
            "21": "282",
            "22": "283",
            "23": "284",
            "24": "285",
            "25": "286",
            "26": "287",
            "27": "288",
            "28": "289",
            "29": "290",
            "30": "291"
          },
          "geom": {
            "loc": {
              "x": 798,
              "y": 118
            }
          },
          "label": "Show Iterated Images",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Iterated Images",
            "Hide Iterated Images"
          ],
          "shouldAutogenerateLabel": true
        },
        "306": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "259",
            "1": "260",
            "2": "261",
            "3": "262",
            "4": "263",
            "5": "264",
            "6": "265",
            "7": "266",
            "8": "268",
            "9": "269",
            "10": "270",
            "11": "272",
            "12": "273",
            "13": "274",
            "14": "275",
            "15": "276",
            "16": "277",
            "17": "278",
            "18": "279",
            "19": "280",
            "20": "281",
            "21": "282",
            "22": "283",
            "23": "284",
            "24": "285",
            "25": "286",
            "26": "287",
            "27": "288",
            "28": "289",
            "29": "290",
            "30": "291"
          },
          "geom": {
            "loc": {
              "x": 798,
              "y": 98
            }
          },
          "label": "Hide Iterated Images",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Iterated Images",
            "Show Iterated Images"
          ],
          "shouldAutogenerateLabel": true
        },
        "307": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "293",
            "1": "294",
            "2": "295",
            "3": "296",
            "4": "297",
            "5": "298",
            "6": "299",
            "7": "300",
            "8": "301",
            "9": "302"
          },
          "geom": {
            "loc": {
              "x": 963,
              "y": 117
            }
          },
          "label": "Hide Iterated Images",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Iterated Images",
            "Show Iterated Images"
          ],
          "shouldAutogenerateLabel": true
        },
        "308": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "293",
            "1": "294",
            "2": "295",
            "3": "296",
            "4": "297",
            "5": "298",
            "6": "299",
            "7": "300",
            "8": "301",
            "9": "302"
          },
          "geom": {
            "loc": {
              "x": 963,
              "y": 97
            }
          },
          "label": "Show Iterated Images",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Iterated Images",
            "Hide Iterated Images"
          ],
          "shouldAutogenerateLabel": true
        },
        "309": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "248"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 438,
              "y": 100
            }
          },
          "textMFS": "<H<T' = '><?xC0001>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "text-decoration": "none"
          }
        },
        "310": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "309"
          },
          "geom": {
            "loc": {
              "x": 963,
              "y": 137
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "311": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "309"
          },
          "geom": {
            "loc": {
              "x": 963,
              "y": 157
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "312": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "305",
            "1": "308",
            "2": "311"
          },
          "geom": {
            "loc": {
              "x": 198,
              "y": 136
            }
          },
          "label": "Show Product",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Show Product"
          ]
        },
        "313": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "49",
            "1": "306",
            "2": "310",
            "3": "307"
          },
          "geom": {
            "loc": {
              "x": 63,
              "y": 136
            }
          },
          "label": "New Product",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "New Product"
          ]
        },
        "314": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "305",
            "1": "308"
          },
          "geom": {
            "loc": {
              "x": 326,
              "y": 136
            }
          },
          "label": "Show Hint",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Show Hint"
          ]
        },
        "315": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 537,
              "y": 191
            }
          },
          "textMFS": "<VL<SR1G1L1<T'Use the New Product button to generate questions.'>><0><T'Find the product of 10 different pairs of integers.'><T'Explain how you know you are correct.'>>",
          "style": {
            "text-decoration": "none",
            "color": "green"
          }
        },
        "316": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 716,
              "y": 72
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "7"
        }
      }
    }
  ]
};