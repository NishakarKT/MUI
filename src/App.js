import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import TypographyElem from "./pages/TypographyElem";
import ButtonElem from "./pages/ButtonElem";
import TextFieldElem from "./pages/TextFieldElem";
import SelectElem from "./pages/SelectElem";
import RadioButtonElem from "./pages/RadioButtonElem";
import CheckBoxElem from "./pages/CheckBoxElem";
import SwitchElem from "./pages/SwitchElem";
import RatingElem from "./pages/RatingElem";
import AutoCompleteElem from "./pages/AutoCompleteElem";
import BoxElem from "./pages/BoxElem";
import StackElem from "./pages/StackElem";
import GridElem from "./pages/GridElem";
import PaperElem from "./pages/PaperElem";
import CardElem from "./pages/CardElem";
import AccordionElem from "./pages/AccordionElem";
import ImageListElem from "./pages/ImageListElem";
import AppBarElem from "./pages/AppBarElem";
import MenuElem from "./pages/MenuElem";
import LinkElem from "./pages/LinkElem";
import BreadcrumbsElem from "./pages/BreadcrumbsElem";
import DrawerElem from "./pages/DrawerElem";
import SpeedDialElem from "./pages/SpeedDialElem";
import BottomNavigationElem from "./pages/BottomNavigationElem";
import AvatarElem from "./pages/AvatarElem";
import BadgeElem from "./pages/BadgeElem";
import ListElem from "./pages/ListElem";
import ChipElem from "./pages/ChipElem";
import TooltipElem from "./pages/TooltipElem";
import TabelElem from "./pages/TabelElem";
import AlertElem from "./pages/AlertElem";
import ProgressElem from "./pages/ProgressElem";
import SkeletonElem from "./pages/SkeletonElem";
import DialogElem from "./pages/DialogElem";
import SnackbarElem from "./pages/SnackbarElem";
import Responsiveness from "./pages/Responsiveness";
import CustomizingTheme from "./pages/CustomizingTheme";
// MUI/Lab
import LoadingButtonElem from "./pages/LoadingButtonElem";
import TabsElem from "./pages/TabsElem";
import TimelineElem from "./pages/TimelineElem";
import MasonryElem from "./pages/MasonryElem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Typography" element={<TypographyElem />} />
        <Route exact path="/Button" element={<ButtonElem />} />
        <Route exact path="/TextField" element={<TextFieldElem />} />
        <Route exact path="/Select" element={<SelectElem />} />
        <Route exact path="/RadioButton" element={<RadioButtonElem />} />
        <Route exact path="/CheckBox" element={<CheckBoxElem />} />
        <Route exact path="/Switch" element={<SwitchElem />} />
        <Route exact path="/Rating" element={<RatingElem />} />
        <Route exact path="/AutoComplete" element={<AutoCompleteElem />} />
        <Route exact path="/Box" element={<BoxElem />} />
        <Route exact path="/Stack" element={<StackElem />} />
        <Route exact path="/Grid" element={<GridElem />} />
        <Route exact path="/Paper" element={<PaperElem />} />
        <Route exact path="/Card" element={<CardElem />} />
        <Route exact path="/Accordion" element={<AccordionElem />} />
        <Route exact path="/ImageList" element={<ImageListElem />} />
        <Route exact path="/AppBar" element={<AppBarElem />} />
        <Route exact path="/Menu" element={<MenuElem />} />
        <Route exact path="/Link" element={<LinkElem />} />
        <Route exact path="/Breadcrumbs" element={<BreadcrumbsElem />} />
        <Route exact path="/Drawer" element={<DrawerElem />} />
        <Route exact path="/SpeedDial" element={<SpeedDialElem />} />
        <Route exact path="/BottomNavigation" element={<BottomNavigationElem />} />
        <Route exact path="/Avatar" element={<AvatarElem />} />
        <Route exact path="/Badge" element={<BadgeElem />} />
        <Route exact path="/List" element={<ListElem />} />
        <Route exact path="/Chip" element={<ChipElem />} />
        <Route exact path="/Tooltip" element={<TooltipElem />} />
        <Route exact path="/Table" element={<TabelElem />} />
        <Route exact path="/Alert" element={<AlertElem />} />
        <Route exact path="/Progress" element={<ProgressElem />} />
        <Route exact path="/Skeleton" element={<SkeletonElem />} />
        <Route exact path="/Dialog" element={<DialogElem />} />
        <Route exact path="/Snackbar" element={<SnackbarElem />} />
        <Route exact path="/Responsiveness" element={<Responsiveness />} />
        <Route exact path="/CustomizingTheme" element={<CustomizingTheme />} />
        {/* MUI Lab  */}
        <Route exact path="/LoadingButton" element={<LoadingButtonElem />} />
        <Route exact path="/Tabs" element={<TabsElem />} />
        <Route exact path="/Timeline" element={<TimelineElem />} />
        <Route exact path="/Masonry" element={<MasonryElem />} />
      </Routes>
    </Router>
  );
};

export default App;