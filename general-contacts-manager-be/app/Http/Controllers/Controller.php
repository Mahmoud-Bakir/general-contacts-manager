<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Contact;

class Controller extends BaseController
{
    function retrieveContacts(){
        $contacts = Contact::all();
        return response()->json([
            'status' => 'Success',
            'data' => $contacts
        ]);
    
    }
    function addContact(Request $request){
        $contact = new Contact;
        $contact->name =$request->name;
        $contact->number =$request->number;
        $contact->altitude =$request->altitude;
        $contact->longitude =$request->longitude;
        $contact->save();


        return response()->json([
            'status' => 'Success',
            'data' => $contact
        ]);
    
    }
}
