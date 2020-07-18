import sortsDisplayText from "../logic/sortsDisplayText";
import motivationalToArray from "../logic/motivationalToArray";
import coreState from "../../GlobalState/coreState";
import projectHistoryState from "../../GlobalState/projectHistoryState";
import i18n from "i18next";

const uploadMotivationalData = () => {
  const data = [
    [
      "participant_1",
      -1,
      -3,
      5,
      -4,
      5,
      -1,
      0,
      -4,
      -3,
      3,
      1,
      -3,
      -5,
      2,
      4,
      4,
      -3,
      5,
      1,
      3,
      2,
      -1,
      1,
      -5,
      -1,
      -2,
      0,
      0,
      0,
      -2,
      1,
      -2,
      -4,
      3,
      2,
      2,
      -3,
      4,
      -2,
      1,
      -2,
      1,
      3,
      0,
      -5,
      2,
      -3,
      5,
      2,
      3,
      1,
      4,
      -4,
      -3,
      4,
      0,
      1,
      0,
      2,
      -5,
      5,
      0,
      -2,
      -4,
      2,
      -1,
      -1,
      1,
      -1,
      -2,
      0,
      -4,
      4,
      -2,
      3,
      -1,
      -5,
      3,
      0,
      -1
    ],
    [
      "participant_2",
      -5,
      0,
      2,
      -2,
      4,
      0,
      -5,
      0,
      1,
      -5,
      2,
      -2,
      -2,
      -4,
      1,
      1,
      1,
      4,
      2,
      -1,
      -3,
      -4,
      -3,
      1,
      0,
      4,
      -4,
      3,
      0,
      4,
      -1,
      -4,
      -1,
      -1,
      5,
      -5,
      4,
      1,
      -4,
      3,
      3,
      5,
      2,
      -2,
      -3,
      -1,
      -2,
      5,
      2,
      1,
      0,
      0,
      3,
      -3,
      -3,
      0,
      0,
      -1,
      1,
      4,
      -3,
      2,
      3,
      -2,
      -1,
      -5,
      3,
      5,
      -2,
      -1,
      5,
      -4,
      -2,
      0,
      2,
      -1,
      1,
      3,
      -3,
      2
    ],
    [
      "participant_3",
      -5,
      -1,
      3,
      -2,
      3,
      0,
      2,
      -3,
      -3,
      -5,
      1,
      -2,
      1,
      -4,
      4,
      -4,
      -2,
      0,
      3,
      1,
      0,
      0,
      1,
      -5,
      3,
      4,
      5,
      4,
      4,
      -3,
      1,
      -5,
      0,
      -4,
      4,
      1,
      1,
      -3,
      -1,
      -5,
      -2,
      1,
      -3,
      2,
      0,
      5,
      -1,
      2,
      0,
      5,
      2,
      0,
      3,
      5,
      -1,
      2,
      3,
      -2,
      -4,
      -4,
      -1,
      0,
      -1,
      -3,
      2,
      -2,
      -1,
      4,
      -2,
      -1,
      5,
      -4,
      -2,
      0,
      2,
      -1,
      1,
      3,
      -3,
      2
    ],
    [
      "participant_4",
      -5,
      0,
      2,
      -2,
      4,
      0,
      -5,
      0,
      1,
      -5,
      2,
      1,
      4,
      1,
      0,
      -1,
      2,
      -2,
      -2,
      1,
      0,
      -4,
      1,
      -1,
      -1,
      -3,
      -4,
      4,
      -3,
      -4,
      -4,
      3,
      4,
      -1,
      5,
      -5,
      4,
      1,
      -4,
      3,
      3,
      5,
      2,
      -2,
      -3,
      -1,
      -2,
      5,
      2,
      1,
      0,
      0,
      3,
      -3,
      -3,
      0,
      0,
      -1,
      1,
      4,
      -3,
      2,
      3,
      -2,
      -1,
      -5,
      3,
      5,
      -2,
      -1,
      5,
      -4,
      -2,
      0,
      2,
      -1,
      1,
      3,
      -3,
      2
    ],
    [
      "participant_5",
      -5,
      0,
      2,
      -5,
      -2,
      -2,
      2,
      5,
      -1,
      -3,
      4,
      -1,
      2,
      0,
      4,
      3,
      5,
      -1,
      -4,
      3,
      -1,
      -3,
      1,
      -5,
      2,
      4,
      1,
      -1,
      0,
      -4,
      3,
      -4,
      -2,
      -3,
      2,
      4,
      1,
      5,
      -2,
      -5,
      -2,
      1,
      2,
      -1,
      0,
      3,
      0,
      4,
      -2,
      4,
      0,
      -3,
      0,
      -3,
      3,
      -1,
      3,
      0,
      -5,
      1,
      -4,
      -3,
      5,
      1,
      1,
      -1,
      1,
      0,
      5,
      -2,
      -4,
      -4,
      -2,
      0,
      2,
      -1,
      1,
      3,
      -3,
      2
    ],
    [
      "participant_6",
      0,
      -2,
      0,
      4,
      2,
      -5,
      -2,
      -2,
      -1,
      -2,
      -1,
      2,
      5,
      3,
      -2,
      4,
      5,
      4,
      5,
      -3,
      -1,
      -1,
      1,
      4,
      1,
      1,
      5,
      3,
      -3,
      -4,
      4,
      0,
      -1,
      2,
      0,
      -4,
      -5,
      1,
      -4,
      2,
      -1,
      0,
      1,
      -3,
      -5,
      3,
      -3,
      1,
      0,
      2,
      -4,
      -1,
      2,
      0,
      -3,
      0,
      3,
      2,
      -5,
      3,
      -2,
      2,
      -1,
      0,
      5,
      -2,
      1,
      -3,
      -4,
      1,
      4,
      -5,
      -3,
      -1,
      1,
      0,
      -2,
      3,
      3,
      -4
    ],
    [
      "participant_7",
      5,
      5,
      -1,
      -5,
      -1,
      -2,
      -1,
      2,
      -3,
      2,
      2,
      4,
      -4,
      2,
      5,
      -5,
      5,
      0,
      -2,
      -2,
      -5,
      3,
      -1,
      0,
      -3,
      4,
      -3,
      2,
      -3,
      3,
      -3,
      0,
      1,
      2,
      1,
      4,
      0,
      0,
      1,
      4,
      1,
      1,
      -1,
      1,
      0,
      -4,
      -3,
      1,
      -1,
      -5,
      2,
      3,
      -2,
      2,
      -1,
      -2,
      4,
      3,
      -4,
      1,
      0,
      -1,
      -5,
      5,
      -2,
      -4,
      0,
      4,
      0,
      -2,
      -4,
      0,
      -3,
      3,
      1,
      -2,
      -1,
      3,
      3,
      -4
    ],
    [
      "participant_8",
      0,
      -2,
      0,
      4,
      2,
      -5,
      -2,
      -2,
      -3,
      -3,
      -1,
      -1,
      1,
      4,
      0,
      3,
      1,
      -1,
      -5,
      4,
      0,
      -4,
      0,
      -1,
      3,
      4,
      5,
      -5,
      5,
      2,
      0,
      -4,
      5,
      -4,
      -3,
      2,
      -2,
      -2,
      -3,
      1,
      0,
      1,
      -5,
      2,
      4,
      0,
      3,
      3,
      3,
      -1,
      2,
      -1,
      2,
      1,
      -1,
      -4,
      -3,
      -2,
      1,
      5,
      2,
      2,
      -1,
      0,
      5,
      -2,
      1,
      -3,
      -4,
      1,
      4,
      -5,
      -3,
      -1,
      1,
      0,
      -2,
      3,
      3,
      -4
    ],
    [
      "participant_9",
      0,
      -2,
      0,
      4,
      2,
      -5,
      -2,
      -2,
      -3,
      -3,
      -1,
      -1,
      1,
      4,
      0,
      3,
      2,
      -3,
      -5,
      3,
      4,
      3,
      4,
      -3,
      0,
      2,
      1,
      -2,
      -5,
      5,
      0,
      -4,
      -2,
      4,
      3,
      1,
      0,
      0,
      5,
      0,
      -1,
      -5,
      -4,
      2,
      -4,
      3,
      -1,
      5,
      1,
      -1,
      2,
      -1,
      2,
      1,
      -1,
      -4,
      -3,
      -2,
      1,
      5,
      2,
      2,
      -1,
      0,
      5,
      -2,
      1,
      -3,
      -4,
      1,
      4,
      -5,
      -3,
      -1,
      1,
      0,
      -2,
      3,
      3,
      -4
    ],
    [
      "participant_10",
      0,
      -2,
      0,
      4,
      2,
      -5,
      -2,
      -2,
      -3,
      -3,
      -1,
      -1,
      1,
      4,
      0,
      3,
      2,
      -5,
      -3,
      3,
      4,
      3,
      4,
      -3,
      0,
      2,
      1,
      -2,
      -5,
      5,
      0,
      -4,
      -2,
      4,
      3,
      1,
      0,
      0,
      5,
      0,
      -1,
      -5,
      -4,
      2,
      -4,
      3,
      -1,
      5,
      1,
      -1,
      2,
      -1,
      2,
      1,
      -1,
      -4,
      -3,
      -2,
      1,
      5,
      2,
      2,
      -1,
      0,
      5,
      -2,
      1,
      -3,
      -4,
      1,
      4,
      -5,
      -3,
      -1,
      1,
      0,
      -2,
      3,
      3,
      -4
    ],
    [
      "participant_11",
      5,
      3,
      4,
      5,
      1,
      4,
      -5,
      -2,
      2,
      -1,
      4,
      -4,
      -5,
      4,
      1,
      -3,
      2,
      2,
      -1,
      3,
      -4,
      5,
      3,
      1,
      -1,
      -3,
      0,
      -2,
      -4,
      0,
      2,
      0,
      2,
      4,
      -2,
      -5,
      3,
      0,
      0,
      -5,
      -4,
      -1,
      -3,
      3,
      1,
      3,
      0,
      -2,
      -5,
      2,
      -2,
      3,
      -3,
      5,
      2,
      1,
      -3,
      -4,
      -1,
      -2,
      -1,
      2,
      -4,
      5,
      0,
      -1,
      1,
      4,
      -3,
      1,
      0,
      -3,
      1,
      -1,
      -1,
      1,
      0,
      -2,
      -2,
      0
    ],
    [
      "participant_12",
      5,
      3,
      4,
      5,
      1,
      4,
      -5,
      -2,
      2,
      -1,
      4,
      -4,
      1,
      0,
      2,
      -5,
      1,
      0,
      -4,
      0,
      -3,
      1,
      -5,
      -2,
      5,
      2,
      -4,
      -3,
      -5,
      0,
      -3,
      -1,
      5,
      3,
      -3,
      -3,
      -5,
      0,
      -4,
      3,
      -1,
      2,
      3,
      -2,
      -2,
      0,
      2,
      -1,
      -2,
      4,
      -4,
      3,
      2,
      5,
      3,
      2,
      2,
      1,
      -4,
      4,
      -2,
      -1,
      -1,
      3,
      0,
      -1,
      1,
      4,
      -3,
      1,
      0,
      -3,
      1,
      -1,
      -1,
      1,
      0,
      -2,
      -2,
      0
    ],
    [
      "participant_13",
      5,
      3,
      4,
      5,
      1,
      4,
      -5,
      2,
      -3,
      -3,
      -1,
      0,
      -2,
      2,
      -4,
      3,
      5,
      -3,
      -4,
      -1,
      -4,
      0,
      2,
      -4,
      -1,
      -1,
      3,
      4,
      0,
      4,
      -3,
      2,
      -3,
      3,
      -5,
      0,
      1,
      -5,
      -5,
      0,
      1,
      -2,
      -5,
      0,
      2,
      -2,
      -2,
      5,
      1,
      -2,
      -4,
      3,
      2,
      5,
      3,
      2,
      2,
      1,
      -4,
      4,
      -2,
      -1,
      -1,
      3,
      0,
      -1,
      1,
      4,
      -3,
      1,
      0,
      -3,
      1,
      -1,
      -1,
      1,
      0,
      -2,
      -2,
      0
    ],
    [
      "participant_14",
      5,
      3,
      4,
      5,
      1,
      4,
      -5,
      -2,
      2,
      -1,
      4,
      -4,
      -5,
      -3,
      1,
      0,
      -4,
      2,
      1,
      0,
      5,
      0,
      1,
      -2,
      -5,
      2,
      -4,
      -3,
      -5,
      0,
      -3,
      -1,
      5,
      3,
      -3,
      -3,
      -5,
      0,
      -4,
      3,
      -1,
      2,
      3,
      -2,
      -2,
      0,
      2,
      -1,
      -2,
      4,
      -4,
      3,
      2,
      5,
      3,
      2,
      2,
      1,
      -4,
      4,
      -2,
      -1,
      -1,
      3,
      0,
      -1,
      1,
      4,
      -3,
      1,
      0,
      -3,
      1,
      -1,
      -1,
      1,
      0,
      -2,
      -2,
      0
    ],
    [
      "participant_15",
      5,
      3,
      4,
      5,
      1,
      4,
      -5,
      -2,
      2,
      -1,
      4,
      -4,
      -5,
      -3,
      1,
      0,
      -4,
      2,
      1,
      0,
      -3,
      -3,
      0,
      -5,
      -3,
      3,
      -5,
      -1,
      -4,
      -5,
      -2,
      5,
      0,
      2,
      -2,
      1,
      -4,
      5,
      3,
      3,
      0,
      -3,
      -1,
      0,
      2,
      -2,
      2,
      -1,
      -2,
      4,
      -4,
      3,
      2,
      5,
      3,
      2,
      2,
      1,
      -4,
      4,
      -2,
      -1,
      -1,
      3,
      0,
      -1,
      1,
      4,
      -3,
      1,
      0,
      -3,
      1,
      -1,
      -1,
      1,
      0,
      -2,
      -2,
      0
    ],
    [
      "participant_16",
      3,
      1,
      -2,
      0,
      1,
      0,
      5,
      -1,
      4,
      2,
      -1,
      -2,
      -2,
      3,
      -3,
      -5,
      -4,
      2,
      -1,
      -3,
      1,
      4,
      -5,
      4,
      -3,
      0,
      0,
      -4,
      -3,
      2,
      1,
      -1,
      2,
      -4,
      3,
      0,
      -3,
      -2,
      -5,
      4,
      -1,
      5,
      5,
      5,
      1,
      5,
      2,
      -3,
      0,
      0,
      -4,
      -5,
      1,
      -2,
      1,
      4,
      1,
      3,
      -2,
      -4,
      2,
      -1,
      0,
      2,
      -2,
      3,
      -1,
      -1,
      -1,
      1,
      -5,
      0,
      -3,
      0,
      -4,
      3,
      4,
      -2,
      3,
      2
    ],
    [
      "participant_17",
      -1,
      3,
      3,
      5,
      -4,
      3,
      0,
      1,
      -1,
      1,
      0,
      0,
      2,
      3,
      3,
      1,
      1,
      -2,
      3,
      -5,
      0,
      -3,
      0,
      -2,
      -5,
      -1,
      3,
      1,
      2,
      -4,
      -3,
      -5,
      -4,
      4,
      -2,
      4,
      4,
      0,
      1,
      4,
      -5,
      2,
      -1,
      -1,
      0,
      2,
      -4,
      -2,
      1,
      -4,
      -2,
      1,
      -1,
      0,
      4,
      2,
      5,
      2,
      2,
      4,
      -2,
      -1,
      -4,
      -2,
      -1,
      -3,
      -2,
      5,
      -1,
      -3,
      1,
      0,
      -3,
      -3,
      5,
      -3,
      5,
      0,
      -5,
      2
    ],
    [
      "participant_18",
      -1,
      -5,
      1,
      -1,
      3,
      -2,
      -4,
      -1,
      -1,
      2,
      2,
      1,
      5,
      -5,
      -2,
      -1,
      1,
      2,
      0,
      0,
      2,
      4,
      0,
      -2,
      3,
      -2,
      -2,
      -4,
      2,
      -5,
      5,
      -4,
      -4,
      -1,
      1,
      4,
      3,
      3,
      0,
      1,
      0,
      4,
      4,
      -3,
      1,
      3,
      0,
      4,
      -5,
      3,
      3,
      1,
      0,
      0,
      -4,
      1,
      -3,
      2,
      2,
      4,
      -2,
      -1,
      -4,
      -2,
      -1,
      -3,
      -2,
      5,
      -1,
      -3,
      1,
      0,
      -3,
      -3,
      5,
      -3,
      5,
      0,
      -5,
      2
    ],
    [
      "participant_19",
      -1,
      -5,
      1,
      -1,
      3,
      -2,
      -4,
      -4,
      -3,
      2,
      1,
      -1,
      -5,
      3,
      3,
      -5,
      4,
      0,
      1,
      5,
      3,
      -3,
      1,
      0,
      3,
      4,
      0,
      0,
      1,
      -4,
      -2,
      -2,
      0,
      3,
      2,
      3,
      4,
      0,
      1,
      4,
      -5,
      2,
      -1,
      -1,
      0,
      2,
      -4,
      -2,
      1,
      -4,
      -2,
      1,
      -1,
      0,
      4,
      2,
      5,
      2,
      2,
      4,
      -2,
      -1,
      -4,
      -2,
      -1,
      -3,
      -2,
      5,
      -1,
      -3,
      1,
      0,
      -3,
      -3,
      5,
      -3,
      5,
      0,
      -5,
      2
    ],
    [
      "participant_20",
      -1,
      -5,
      1,
      -1,
      3,
      -2,
      -4,
      -4,
      -3,
      2,
      1,
      -1,
      -5,
      3,
      3,
      -5,
      4,
      0,
      1,
      5,
      3,
      -3,
      0,
      3,
      1,
      4,
      0,
      0,
      1,
      -4,
      -2,
      0,
      3,
      2,
      -2,
      3,
      4,
      0,
      1,
      4,
      -5,
      2,
      -1,
      -1,
      0,
      2,
      -4,
      -2,
      1,
      -4,
      -2,
      1,
      -1,
      0,
      4,
      2,
      5,
      2,
      2,
      4,
      -2,
      -1,
      -4,
      -2,
      -1,
      -3,
      -2,
      5,
      -1,
      -3,
      1,
      0,
      -3,
      -3,
      5,
      -3,
      5,
      0,
      -5,
      2
    ],
    [
      "participant_21",
      -2,
      1,
      0,
      2,
      -3,
      -2,
      -3,
      4,
      -3,
      -5,
      -4,
      -2,
      3,
      3,
      2,
      0,
      3,
      2,
      3,
      0,
      0,
      -1,
      5,
      1,
      0,
      2,
      -5,
      -4,
      4,
      -1,
      -3,
      -3,
      1,
      4,
      -1,
      1,
      2,
      -1,
      1,
      1,
      -5,
      4,
      -1,
      2,
      -1,
      -1,
      -2,
      1,
      -5,
      -4,
      -1,
      -5,
      -2,
      2,
      4,
      -2,
      3,
      -4,
      3,
      -3,
      2,
      4,
      5,
      0,
      -4,
      1,
      -3,
      -1,
      0,
      0,
      -2,
      1,
      5,
      0,
      -4,
      -2,
      0,
      5,
      3,
      5
    ],
    [
      "participant_22",
      -2,
      2,
      2,
      -3,
      -1,
      -1,
      1,
      -3,
      -1,
      0,
      2,
      2,
      3,
      3,
      -2,
      -3,
      -4,
      4,
      5,
      2,
      4,
      4,
      1,
      3,
      -3,
      -4,
      4,
      2,
      1,
      -1,
      -1,
      2,
      -5,
      4,
      0,
      4,
      -2,
      1,
      3,
      -3,
      -5,
      -3,
      -2,
      1,
      0,
      0,
      -1,
      3,
      3,
      -5,
      -4,
      1,
      1,
      -2,
      5,
      -5,
      2,
      -1,
      -4,
      -1,
      -5,
      0,
      -2,
      0,
      -4,
      1,
      -3,
      -1,
      0,
      0,
      -2,
      1,
      5,
      0,
      -4,
      -2,
      0,
      5,
      3,
      5
    ],
    [
      "participant_23",
      -2,
      2,
      2,
      -3,
      -1,
      -1,
      1,
      -3,
      -1,
      0,
      2,
      2,
      3,
      -3,
      3,
      -2,
      -4,
      2,
      -1,
      5,
      1,
      -3,
      3,
      -3,
      4,
      -5,
      -1,
      -2,
      1,
      1,
      4,
      1,
      2,
      -2,
      2,
      -5,
      0,
      4,
      -4,
      4,
      3,
      4,
      -3,
      0,
      4,
      0,
      -1,
      3,
      3,
      -5,
      -4,
      1,
      1,
      -2,
      5,
      -5,
      2,
      -1,
      -4,
      -1,
      -5,
      0,
      -2,
      0,
      -4,
      1,
      -3,
      -1,
      0,
      0,
      -2,
      1,
      5,
      0,
      -4,
      -2,
      0,
      5,
      3,
      5
    ],
    [
      "participant_24",
      -2,
      2,
      2,
      -3,
      -1,
      -1,
      1,
      -1,
      -5,
      -2,
      4,
      -4,
      3,
      -3,
      -4,
      0,
      -3,
      1,
      -1,
      4,
      -2,
      -2,
      -1,
      1,
      5,
      2,
      -2,
      5,
      -5,
      2,
      1,
      2,
      -3,
      0,
      -1,
      0,
      3,
      1,
      3,
      0,
      4,
      1,
      1,
      0,
      2,
      -4,
      -3,
      2,
      -1,
      -5,
      3,
      -4,
      4,
      -4,
      -2,
      -1,
      0,
      4,
      -5,
      3,
      -1,
      -5,
      3,
      -3,
      -3,
      1,
      4,
      0,
      2,
      0,
      -2,
      1,
      5,
      0,
      -4,
      -2,
      0,
      5,
      3,
      5
    ],
    [
      "participant_25",
      -2,
      2,
      2,
      -3,
      -1,
      -1,
      1,
      -3,
      -1,
      0,
      2,
      2,
      3,
      -3,
      3,
      -2,
      -4,
      4,
      5,
      2,
      -1,
      1,
      4,
      -4,
      -1,
      0,
      2,
      -5,
      3,
      4,
      -3,
      4,
      2,
      4,
      1,
      4,
      -2,
      1,
      3,
      -3,
      -5,
      -3,
      -2,
      1,
      0,
      0,
      -1,
      3,
      3,
      -5,
      -4,
      1,
      1,
      -2,
      5,
      -5,
      2,
      -1,
      -4,
      -1,
      -5,
      0,
      -2,
      0,
      -4,
      1,
      -3,
      -1,
      0,
      0,
      -2,
      1,
      5,
      0,
      -4,
      -2,
      0,
      5,
      3,
      5
    ],
    [
      "participant_26",
      3,
      1,
      -1,
      -4,
      0,
      1,
      0,
      -2,
      -5,
      5,
      -2,
      -3,
      -2,
      -1,
      0,
      -3,
      2,
      1,
      5,
      -3,
      -5,
      3,
      -5,
      3,
      -3,
      3,
      5,
      -1,
      -1,
      -1,
      0,
      -4,
      2,
      -4,
      4,
      -1,
      1,
      1,
      1,
      -4,
      3,
      2,
      4,
      0,
      2,
      -2,
      -2,
      0,
      -1,
      5,
      4,
      3,
      3,
      4,
      2,
      0,
      -2,
      0,
      -3,
      -3,
      2,
      2,
      -5,
      1,
      0,
      1,
      4,
      -4,
      -1,
      1,
      0,
      -2,
      4,
      -1,
      -2,
      -4,
      2,
      5,
      -3,
      -5
    ],
    [
      "participant_27",
      3,
      1,
      0,
      -2,
      3,
      3,
      -4,
      2,
      -2,
      -1,
      2,
      -4,
      1,
      4,
      2,
      -2,
      0,
      4,
      5,
      -1,
      5,
      -1,
      2,
      1,
      -3,
      1,
      -1,
      4,
      3,
      -2,
      -1,
      -4,
      -1,
      -3,
      3,
      0,
      0,
      -3,
      -1,
      5,
      1,
      0,
      3,
      0,
      -2,
      -4,
      -5,
      5,
      1,
      2,
      -5,
      3,
      0,
      -5,
      -3,
      4,
      -2,
      0,
      -3,
      -3,
      2,
      2,
      -5,
      1,
      0,
      1,
      4,
      -4,
      -1,
      1,
      0,
      -2,
      4,
      -1,
      -2,
      -4,
      2,
      5,
      -3,
      -5
    ],
    [
      "participant_28",
      3,
      1,
      -1,
      -4,
      0,
      2,
      1,
      -2,
      2,
      4,
      2,
      0,
      -1,
      0,
      3,
      3,
      5,
      -3,
      3,
      0,
      -4,
      0,
      -2,
      -1,
      -4,
      2,
      -1,
      1,
      3,
      -3,
      2,
      0,
      -2,
      1,
      0,
      -2,
      1,
      -3,
      1,
      -5,
      -2,
      1,
      -5,
      4,
      3,
      4,
      0,
      2,
      4,
      -5,
      -3,
      5,
      -2,
      0,
      -1,
      -3,
      3,
      4,
      -3,
      -2,
      -1,
      -1,
      0,
      -1,
      2,
      1,
      -4,
      -5,
      1,
      -4,
      5,
      5,
      4,
      -1,
      -2,
      -4,
      2,
      5,
      -3,
      -5
    ],
    [
      "participant_29",
      3,
      1,
      -1,
      -4,
      0,
      1,
      0,
      -2,
      -5,
      1,
      5,
      0,
      -1,
      5,
      -3,
      5,
      -1,
      -1,
      1,
      1,
      3,
      -5,
      3,
      3,
      4,
      -1,
      -3,
      -3,
      -2,
      -4,
      0,
      -3,
      2,
      -2,
      1,
      -4,
      2,
      -1,
      -5,
      -4,
      3,
      2,
      4,
      0,
      2,
      -2,
      -2,
      0,
      -1,
      5,
      4,
      3,
      3,
      4,
      2,
      0,
      -2,
      0,
      -3,
      -3,
      2,
      2,
      -5,
      1,
      0,
      1,
      4,
      -4,
      -1,
      1,
      0,
      -2,
      4,
      -1,
      -2,
      -4,
      2,
      5,
      -3,
      -5
    ],
    [
      "participant_30",
      3,
      1,
      -1,
      -4,
      0,
      1,
      0,
      -2,
      -5,
      5,
      -2,
      -3,
      -1,
      -4,
      -2,
      5,
      -4,
      5,
      0,
      3,
      4,
      2,
      -2,
      3,
      -3,
      4,
      3,
      3,
      0,
      -5,
      -3,
      4,
      2,
      2,
      -2,
      -2,
      2,
      1,
      -1,
      3,
      -1,
      0,
      0,
      1,
      0,
      -4,
      -1,
      -5,
      2,
      1,
      -5,
      -1,
      1,
      -1,
      1,
      0,
      -3,
      0,
      4,
      3,
      -4,
      -3,
      1,
      2,
      -3,
      4,
      -1,
      5,
      2,
      1,
      0,
      -2,
      4,
      -1,
      -2,
      -4,
      2,
      5,
      -3,
      -5
    ],
    [
      "participant_31",
      2,
      0,
      -5,
      -1,
      1,
      -2,
      1,
      2,
      1,
      -3,
      4,
      -1,
      0,
      -4,
      4,
      1,
      -4,
      -5,
      -1,
      3,
      4,
      3,
      -4,
      0,
      1,
      -2,
      -1,
      2,
      0,
      2,
      3,
      2,
      1,
      0,
      -4,
      5,
      -5,
      -2,
      1,
      4,
      5,
      -5,
      -2,
      -3,
      4,
      -1,
      -1,
      3,
      2,
      -4,
      -2,
      5,
      -1,
      -1,
      5,
      -3,
      -1,
      -5,
      1,
      3,
      4,
      -3,
      0,
      2,
      -4,
      0,
      5,
      -3,
      -2,
      3,
      -2,
      0,
      -3,
      -3,
      -2,
      2,
      1,
      0,
      3,
      0
    ],
    [
      "participant_32",
      2,
      0,
      -5,
      -1,
      1,
      -2,
      1,
      2,
      1,
      -1,
      0,
      -3,
      -1,
      3,
      -1,
      5,
      2,
      5,
      -3,
      4,
      -2,
      -1,
      5,
      3,
      1,
      -1,
      -5,
      4,
      -1,
      4,
      -2,
      3,
      1,
      3,
      -4,
      -4,
      1,
      5,
      3,
      -4,
      2,
      -3,
      -5,
      5,
      -5,
      0,
      4,
      2,
      1,
      -4,
      2,
      0,
      -2,
      -3,
      -4,
      2,
      -3,
      -1,
      1,
      0,
      4,
      -5,
      -2,
      -2,
      -1,
      0,
      0,
      -4,
      4,
      3,
      -2,
      0,
      -3,
      -3,
      -2,
      2,
      1,
      0,
      3,
      0
    ],
    [
      "participant_33",
      2,
      0,
      -5,
      -1,
      1,
      -3,
      -2,
      4,
      -4,
      3,
      -1,
      -5,
      1,
      4,
      3,
      -3,
      1,
      -3,
      0,
      5,
      1,
      4,
      2,
      -2,
      0,
      3,
      5,
      1,
      3,
      -5,
      -3,
      2,
      1,
      4,
      -3,
      5,
      2,
      0,
      -4,
      1,
      0,
      -4,
      -1,
      -2,
      -1,
      5,
      -1,
      -1,
      4,
      -4,
      -2,
      2,
      -1,
      -1,
      -5,
      2,
      1,
      -5,
      3,
      2,
      -4,
      -2,
      5,
      -2,
      -1,
      0,
      0,
      -4,
      4,
      3,
      -2,
      0,
      -3,
      -3,
      -2,
      2,
      1,
      0,
      3,
      0
    ],
    [
      "participant_34",
      2,
      0,
      -5,
      -1,
      5,
      -3,
      5,
      4,
      -1,
      -1,
      1,
      -2,
      0,
      1,
      1,
      3,
      -3,
      -1,
      2,
      2,
      -2,
      -1,
      5,
      3,
      1,
      -1,
      -5,
      4,
      -1,
      4,
      -2,
      3,
      1,
      3,
      -4,
      -4,
      1,
      5,
      3,
      -4,
      2,
      -3,
      -5,
      5,
      -5,
      0,
      4,
      2,
      1,
      -4,
      2,
      0,
      -2,
      -3,
      -4,
      2,
      -3,
      -1,
      1,
      0,
      4,
      -5,
      -2,
      -2,
      -1,
      0,
      0,
      -4,
      4,
      3,
      -2,
      0,
      -3,
      -3,
      -2,
      2,
      1,
      0,
      3,
      0
    ],
    [
      "participant_35",
      2,
      0,
      -5,
      -1,
      1,
      -2,
      1,
      2,
      1,
      1,
      5,
      -4,
      2,
      3,
      3,
      3,
      3,
      4,
      -3,
      1,
      4,
      -5,
      5,
      4,
      5,
      -3,
      -1,
      4,
      -5,
      -2,
      0,
      -2,
      2,
      -1,
      -4,
      -1,
      5,
      2,
      1,
      3,
      -3,
      -5,
      -4,
      0,
      -1,
      -1,
      -1,
      5,
      1,
      -4,
      2,
      0,
      -2,
      -3,
      -4,
      2,
      -3,
      -1,
      1,
      0,
      4,
      -5,
      -2,
      -2,
      -1,
      0,
      0,
      -4,
      4,
      3,
      -2,
      0,
      -3,
      -3,
      -2,
      2,
      1,
      0,
      3,
      0
    ],
    [
      "participant_36",
      0,
      -5,
      1,
      -3,
      2,
      0,
      -4,
      4,
      -1,
      -1,
      2,
      -1,
      -2,
      0,
      4,
      -5,
      5,
      -3,
      -3,
      2,
      1,
      -1,
      0,
      3,
      -1,
      2,
      -4,
      -1,
      5,
      1,
      -4,
      -5,
      1,
      2,
      2,
      1,
      -3,
      -4,
      -2,
      -5,
      0,
      -5,
      3,
      5,
      -2,
      3,
      4,
      3,
      2,
      5,
      -4,
      4,
      -4,
      -3,
      3,
      3,
      -3,
      -2,
      0,
      -2,
      -2,
      -1,
      0,
      5,
      4,
      0,
      0,
      1,
      1,
      0,
      -1,
      1,
      -2,
      -3,
      3,
      -2,
      2,
      -1,
      1,
      4
    ],
    [
      "participant_37",
      -3,
      -3,
      -2,
      2,
      -1,
      -2,
      5,
      3,
      3,
      0,
      -1,
      5,
      -4,
      -5,
      0,
      -3,
      0,
      -1,
      2,
      0,
      0,
      4,
      2,
      4,
      -1,
      1,
      5,
      -5,
      3,
      2,
      -1,
      -4,
      -5,
      -3,
      0,
      -5,
      -2,
      -3,
      -4,
      2,
      4,
      3,
      1,
      0,
      0,
      1,
      2,
      4,
      0,
      -2,
      0,
      -4,
      -1,
      1,
      -2,
      1,
      -1,
      -2,
      -5,
      5,
      -3,
      1,
      3,
      -4,
      3,
      1,
      5,
      2,
      -4,
      4,
      -1,
      1,
      -2,
      -3,
      3,
      -2,
      2,
      -1,
      1,
      4
    ],
    [
      "participant_38",
      0,
      -5,
      1,
      -3,
      2,
      0,
      -3,
      3,
      2,
      -4,
      0,
      2,
      -4,
      5,
      -5,
      -1,
      2,
      3,
      0,
      -2,
      -1,
      -3,
      0,
      -3,
      1,
      -2,
      1,
      3,
      -1,
      2,
      5,
      3,
      5,
      0,
      1,
      -1,
      -4,
      3,
      -5,
      5,
      0,
      0,
      3,
      2,
      -2,
      -5,
      4,
      -2,
      -5,
      -4,
      1,
      -2,
      4,
      -2,
      5,
      1,
      0,
      -1,
      -4,
      -1,
      -1,
      -4,
      4,
      -3,
      2,
      -3,
      1,
      4,
      4,
      0,
      -1,
      1,
      -2,
      -3,
      3,
      -2,
      2,
      -1,
      1,
      4
    ],
    [
      "participant_39",
      1,
      2,
      3,
      4,
      -3,
      -3,
      5,
      0,
      -5,
      5,
      -4,
      0,
      0,
      2,
      0,
      1,
      3,
      5,
      0,
      3,
      -2,
      -1,
      3,
      -1,
      -1,
      2,
      -3,
      -4,
      2,
      -2,
      2,
      -1,
      -4,
      -2,
      0,
      -3,
      4,
      0,
      2,
      0,
      -1,
      4,
      -5,
      -3,
      -5,
      1,
      -5,
      4,
      0,
      -2,
      0,
      -4,
      -1,
      1,
      -2,
      1,
      -1,
      -2,
      -5,
      5,
      -3,
      1,
      3,
      -4,
      3,
      1,
      5,
      2,
      -4,
      4,
      -1,
      1,
      -2,
      -3,
      3,
      -2,
      2,
      -1,
      1,
      4
    ],
    [
      "participant_40",
      0,
      -5,
      1,
      -3,
      2,
      0,
      2,
      -3,
      -4,
      3,
      -3,
      3,
      2,
      4,
      -1,
      4,
      2,
      -2,
      2,
      3,
      -3,
      0,
      -1,
      2,
      0,
      0,
      3,
      -2,
      -4,
      -4,
      -5,
      4,
      5,
      -1,
      1,
      4,
      -3,
      -2,
      -1,
      0,
      5,
      5,
      0,
      -5,
      1,
      -1,
      0,
      -5,
      0,
      -2,
      0,
      -4,
      -1,
      1,
      -2,
      1,
      -1,
      -2,
      -5,
      5,
      -3,
      1,
      3,
      -4,
      3,
      1,
      5,
      2,
      -4,
      4,
      -1,
      1,
      -2,
      -3,
      3,
      -2,
      2,
      -1,
      1,
      4
    ]
  ];

  const statements = [
    "In times of stress, be bold and valiant",
    "Do not play for safety; it is the most dangerous thing in the world",
    "People are always blaming their circumstances for what they are",
    "I do not believe in circumstances",
    "The people who get on in this world are the people who get up and look for the circumstances they want, and, if they cannot find them, make them",
    "Every person takes the limits of their own field of vision, for the limits of the world",
    "Never be bullied into silence",
    "Never allow yourself to be made a victim",
    "Accept no one's definition of your life, but define yourself",
    "Have no fear of perfection, you will never reach it",
    "The Universal Law is impartial",
    "Life will give you anything you believe",
    "Life will throw you garbage or roses depending on the energy you put in",
    "You are the one in charge, and you must accept that and stand alone",
    "Never allow yourself to be bullied into silence",
    "Never allow yourself to be made a victim",
    "Don't accept others' definition of your life, but define yourself",
    "If you are not afraid to face the music, you may someday lead the band",
    "Do not tell me this a difficult problem",
    "If it were not difficult it would not be a problem",
    "Some people walk in the rain, others just get wet",
    "Always do your best",
    "The rich substance of the Universe is yours to do with as you wish",
    "Why settle for so little in life when you can have so much, just dare to be different in your thinking",
    "Energy and persistence conquer all things",
    "It is by what we ourselves have done, and not by what others have done for us, that we shall be remembered",
    "To avoid criticism, do nothing, say nothing, be nothing",
    "We achieve a sense of self from what we do for ourselves and how we develop our capacities",
    "If all your efforts have gone into developing others, you are bound to feel empty",
    "You cannot cross a chasm in two small jumps",
    "First we will be best, and then we will be first",
    "Normal is not something to aspire to, it is something to get away from",
    "The grass is not, in fact, always greener on the other side of the fence",
    "No, the answer is not at all evident",
    "Fences have nothing to do with it",
    "The grass is greenest where it is watered",
    "When crossing over fences, carry water with you and tend the grass wherever you may be",
    "Make the most of today",
    "She who has begun her task has half done it",
    "We can try to avoid making choices by doing nothing, but even that is a decision",
    "There is a time for departure even when there is no certain place to go",
    "When one door closes another opens",
    "Expect that new door to reveal even greater wonders and glories and surprises",
    "Feel yourself grow with every experience",
    "And look for the reason for it In the long run, we hit only what we aim at",
    "Therefore, we had better aim at something high",
    "Make the most of today",
    "Translate your good intentions into actual deeds",
    "Those who have begun their task has half done it",
    "Do not be afraid to take big steps",
    "You cannot cross a chasm in two small jumps",
    "Some people have greatness thrust upon them",
    "Very few have excellence thrust upon them",
    "Make the most of today",
    "Translate your good intentions into actual deeds",
    "There is a time for departure even when there is no certain place to go",
    "Every person takes the limits of their own field of vision, for the limits of the world",
    "Those who try to do something and fail are infinitely better off than those who try to do nothing and succeed",
    "Don't Sweat the Small Stuff, and it's All Small Stuff",
    "Quit now, you will never make it",
    "If you disregard this advice, you will be halfway there",
    "The Universal Law is thought to be impartial",
    "It will give you anything you believe in",
    "It will throw you garbage or roses depending on the energy you put in",
    "You are the one in charge, and you must accept that and stand alone",
    "If you think God is coming down to fix things for you, forget it, God is out playing golf",
    "Never be bullied into silence",
    "Never allow yourself to be made a victim",
    "Accept no ones' definition of your life, - define yourself",
    "Remember, a dead fish can float downstream, but it takes a live one to swim upstream",
    "Nurture your mind with great thoughts, for you will never go any higher than you think",
    "Once you make the fundamental choice to be the predominant creative force in your life, any approach you take for your own growth can work",
    "Self-image sets the boundaries of individual accomplishment",
    "Believing is one thing, doing another",
    "Many talk like the sea but their lives are stagnant marshes",
    "Self-image sets the boundaries of individual accomplishment",
    "People are not remembered by how few times they fail but by how often they succeed",
    "Every wrong step is another step forward",
    "If you are not fired with enthusiasm, you will be fired with enthusiasm",
    "Argue for your limitations, and sure enough, they are yours"
  ];

  const sortsData = motivationalToArray(data, 80, -5);
  const sortsDisplayText2 = sortsDisplayText(sortsData[1]);

  const logMessageObj1 = {
    logMessage: `Motivational project ${i18n.t("loaded from demo data")}`,
    logType: "motivationalInput"
  };

  projectHistoryState.projectHistoryArray = [logMessageObj1];
  coreState.projectName = "Motivational";
  coreState.statements = statements;
  coreState.numQsorts = 40;
  coreState.numStatements = 80;
  coreState.multiplierArray = ["not loaded"];
  coreState.mainDataObject = sortsData[1];
  coreState.sortsDisplayText = sortsDisplayText2;
  coreState.respondentNames = sortsData[0];
  coreState.qSortPattern = [
    -5,
    -5,
    -5,
    -5,
    -5,
    -4,
    -4,
    -4,
    -4,
    -4,
    -4,
    -3,
    -3,
    -3,
    -3,
    -3,
    -3,
    -3,
    -2,
    -2,
    -2,
    -2,
    -2,
    -2,
    -2,
    -2,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5
  ];
};

export default uploadMotivationalData;
