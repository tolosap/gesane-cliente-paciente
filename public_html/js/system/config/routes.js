/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationClientPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationProfesorPromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};
var authenticationAlumnoPromise = function (sessionService) {
    return sessionService.authenticationPromise(4);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(5);
};
trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/newalumno/9/:codigo', {templateUrl: 'js/app/usuario/9/newalumno.html', controller: 'UsuarioNewalumno9Controller', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/usuario/1/tipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //------------
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/tipousuario/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/tipousuario/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //------------
        $routeProvider.when('/pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------
        $routeProvider.when('/producto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ProductoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ProductoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------
        $routeProvider.when('/linea_pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'Linea_pedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'Linea_pedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'Linea_pedidoXpedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'Linea_pedidoXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'Linea_pedidoXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});


        $routeProvider.when('/circunstanciasalta/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CircunstanciasaltaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CircunstanciasaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CircunstanciasaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CircunstanciasaltaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----Servicio 1 admin --
        $routeProvider.when('/servicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ServicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/servicio/1/xtiposervicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioxtiposervicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xtiposervicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioxtiposervicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xtiposervicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioxtiposervicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //----Servicio 3 profesor --
        $routeProvider.when('/servicio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Servicio 4 profesor --
        $routeProvider.when('/servicio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //----Servicio 5 visitante --
        $routeProvider.when('/servicio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //----Circunstanciasalta 3 profesor --
        $routeProvider.when('/circunstanciasalta/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Circunstanciasalta 4 alumno --
        $routeProvider.when('/circunstanciasalta/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //----Circunstanciasalta 5 visitante --
        $routeProvider.when('/circunstanciasalta/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //----Episodio 1 admin --
        $routeProvider.when('/episodio/1/xcircunstanciasalta/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioxcircunstanciasaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/xcircunstanciasalta/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioxcircunstanciasaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EpisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'EpisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----Episodio 3 profesor --
        $routeProvider.when('/episodio/3/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList3Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Episodio 4 alumno --
        $routeProvider.when('/episodio/4/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //----Episodio 5 visitante --
        $routeProvider.when('/episodio/5/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList5Controller', resolve: {auth: authenticationVisitantePromise}});



        //--
        $routeProvider.when('/tipopago/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipopagoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipopagoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/tipopago/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/tipopago/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/tipopago/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView5Controller', resolve: {auth: authenticationVisitantePromise}});
        // ------ Especialidad
        $routeProvider.when('/especialidad/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EspecialidadPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EspecialidadNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EspecialidadEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'EspecialidadRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/especialidad/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/especialidad/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/especialidad/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView5Controller', resolve: {auth: authenticationVisitantePromise}});
        // ---------- Tipo Dependencia
        $routeProvider.when('/tipodependencia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipodependenciaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipodependenciaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipodependenciaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipodependenciaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/tipodependencia/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/tipodependencia/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/tipodependencia/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView5Controller', resolve: {auth: authenticationVisitantePromise}});




        $routeProvider.when('/destinoalta/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'DestinoaltaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'DestinoaltaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/destinoalta/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------
        $routeProvider.when('/tiposervicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TiposervicioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiposervicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiposervicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TiposervicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //----------
        $routeProvider.when('/tiposervicio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/tiposervicio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/tiposervicio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ModalidadepisodioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ModalidadepisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ModalidadepisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ModalidadepisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        $routeProvider.when('/tipoepisodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/tipoepisodio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/tipoepisodio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView5Controller', resolve: {auth: authenticationVisitantePromise}});
        $routeProvider.when('/tipoepisodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipoepisodioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipoepisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/sexo/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SexoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView2Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/sexo/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/sexo/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/sexo/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView5Controller', resolve: {auth: authenticationVisitantePromise}});
        $routeProvider.when('/sexo/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SexoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SexoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'SexoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/factura/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/factura/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/factura/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        $routeProvider.when('/factura/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'FacturaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----Grupo 1 admin --
        $routeProvider.when('/grupo/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GrupoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GrupoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GrupoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/grupo/1/xcurso/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoxusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/xcurso/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoxusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/xcurso/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GrupoxusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/grupo/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoxusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GrupoxusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/grupo/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GrupoxusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/grupo/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GrupoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/grupo/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GrupoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/grupo/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GrupoView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //--
        $routeProvider.when('/curso/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CursoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/curso/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CursoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/curso/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CursoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/curso/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CursoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/curso/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CursoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/curso/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CursoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/curso/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CursoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/curso/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CursoView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------paciente 4
        $routeProvider.when('/paciente/4/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PacienteEdit4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/paciente/4/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PacienteNew4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/paciente/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PacienteView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/paciente/4/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PacientePList4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------paciente 5
        $routeProvider.when('/paciente/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PacienteView5Controller', resolve: {auth: authenticationVisitantePromise}});

        // ------ Centro
        $routeProvider.when('/centro/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CentroPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centro/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentroView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centro/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CentroNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centro/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CentroEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centro/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CentroRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/centro/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentroView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/centro/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentroView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/centro/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentroView5Controller', resolve: {auth: authenticationVisitantePromise}});
        // ------ Centrosanitario
        $routeProvider.when('/centrosanitario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CentrosanitarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centrosanitario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentrosanitarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centrosanitario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CentrosanitarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centrosanitario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CentrosanitarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/centrosanitario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CentrosanitarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/centrosanitario/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentrosanitarioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/centrosanitario/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentrosanitarioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/centrosanitario/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CentrosanitarioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        // ------ Categoriaprofesional
        $routeProvider.when('/categoriaprofesional/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CategoriaprofesionalPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/categoriaprofesional/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CategoriaprofesionalView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/categoriaprofesional/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CategoriaprofesionalNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/categoriaprofesional/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CategoriaprofesionalEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/categoriaprofesional/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CategoriaprofesionalRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/categoriaprofesional/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CategoriaprofesionalView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/categoriaprofesional/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CategoriaprofesionalView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/categoriaprofesional/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CategoriaprofesionalView5Controller', resolve: {auth: authenticationVisitantePromise}});


        $routeProvider.otherwise({redirectTo: '/'});
    }]);
